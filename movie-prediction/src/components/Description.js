import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Movie from "./Movie";
import spinner from "../ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "./reducer";
import axios from "axios";
import { useParams } from "react-router-dom";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Description = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     axios.get(MOVIE_API_URL).then(jsonResponse => {
//       console.log(JSON.stringify(jsonResponse))
//       dispatch({
//         type: "SEARCH_MOVIES_SUCCESS",
//         payload: jsonResponse.data.Search
//       });
//     });
//   }, []);

//   // you can add this to the onClick listener of the Header component
//   const refreshPage = () => {
//     window.location.reload();
//   };

//   const search = searchValue => {
//     dispatch({
//       type: "SEARCH_MOVIES_REQUEST"
//     });

//     axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
//       jsonResponse => {
//         if (jsonResponse.data.Response === "True") {
//           dispatch({
//             type: "SEARCH_MOVIES_SUCCESS",
//             payload: jsonResponse.data.Search
//           });
//         } else {
//           dispatch({
//             type: "SEARCH_MOVIES_FAILURE",
//             error: jsonResponse.data.Error
//           });
//         }
//       }
//     );
//   };

//   const { movies, errorMessage, loading } = state;
//   const retrievedMovies =
//     loading && !errorMessage ? (
//       <img className="spinner" src={spinner} alt="Loading spinner" />
//     ) : errorMessage ? (
//       <div className="errorMessage">{errorMessage}</div>
//     ) : (
//       movies.map((movie, index) => (
//         <Movie key={`${index}-${movie.Title}`} movie={movie} />
//       ))
//     );

const {imdbID} = useParams()

  return (
    <div className="App">
      <div className="m-container">
        <h1>THIS IS THE MOVIE DESCRIPTION</h1>
        {imdbID}
      </div>
    </div>
  );
};

export default Description;