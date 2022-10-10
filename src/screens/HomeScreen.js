import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from "../Banner";
import requests from '../Request';
import Row from '../Row';




function HomeScreen() {
  return (
    <div className ="homeScreen">
      <Nav/>

      <Banner/>
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title='Trending Now'
        fetchUrl={requests.fetchTrending}
        
      />
      <Row
        title='Action Movies'
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title='COMEDY MOVIES'
        fetchUrl={requests.fetchComedyMovies}
        
      />
      <Row
        title='ROMANCE MOVIES'
        fetchUrl={requests.fetchRomanceMovies}
        
      />
      <Row
        title='HORROR MOVIE'
        fetchUrl={requests.fetchHorrorMovies}
        
      />
      <Row
        title='DOCUMENTARIES'
        fetchUrl={requests.fetchDocumentaries}
        
      />
    </div>
  );
}

export default HomeScreen;