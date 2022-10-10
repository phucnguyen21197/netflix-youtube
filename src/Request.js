//The api key we would store in here

const API_KEY = "c247d599ca9181882b9a01d8642d7d59";

const requests ={
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchNetflixOriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :`/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies :`/discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};


//API example
// https://api.themoviedb.org/3/trending/all/weeks?api_key=c247d599ca9181882b9a01d8642d7d59&language=en-US



export default requests;