import React, { useEffect, useState } from 'react';
import "./PlansScreen.css";
import db from '../firebase';
import {loadStripe} from '@stripe/stripe-js';
import { useSelector} from "react-redux";
import {selectUser} from "../features/userSlice"

function PlansScreen() {
    const [products,setProducts] = useState([]);
    const users = useSelector(selectUser);


    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data()
                const priceSnap = await productDoc.ref.collection('prices').get();
                priceSnap.docs.forEach(doc => {
                    products[productDoc.id].prices = {
                        priceId: priceSnap.id,
                        priceDate: priceSnap.data()
                    }
                })
            });
            setProducts(products);
        })
    }, []);

    console.log(products);

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(users.uid)
        .collection('checkout_sessions')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
            
        });

        docRef.onSnapshot(async(snap) => {
            const { error, sessionId } = snap.data();

            if (error) {
                //show an error to your customer end
                //inspect your cloud function logs in the Firebase console
                alert(`An error occured:  ${error.message}`);
            }

            if (sessionId) {
                // if we have a session, lets direct to checkout page
                //Init Stripe
                
                const stripe = await loadStripe('pk_test_51LnemXBM5VKVfkxGkWWqFnWeYkcR31zm9IkdmIW840Saa4VKJLwmZ2e5BV3hTiy2BHTRFlkOmNq6ikvqhFGKDq7c002TNaYS2j');
                stripe.redirectToCheckout({sessionId});
                } 
            });
        };

    return (
        <div className='plansScreen'>
            {Object.entries(products).map(([productId, productData]) => {
                //add some logic to check if users subscription is active
                //TO DO
                return (
                    <div className='plansScreen__plan'>
                        <div className='plansScreen__info'>
                            <h5>{productData.name}</h5>
                            <h6>{productData.description}</h6>
                        </div>

                        <button onClick={() => loadCheckout(productData.prices.pricesId)}>
                            Subscribe
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default PlansScreen;
