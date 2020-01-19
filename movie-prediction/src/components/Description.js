import React, { useReducer, useState, useEffect } from "react";

import Header from "./Header";
import Movie from "./Movie";
import spinner from "../ajax-loader.gif";
import Search from "./Search";
import { initialState, reducer } from "./reducer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";

const MOVIE_API_URL = "https://www.omdbapi.com/?i=tt0371746&apikey=4a3b711b";
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.adorama.com/alc/wp-content/plugins/itc-types/images/no-image.jpg";

const Description = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const { imdbID, Title } = useParams();
  // const { title } = useParams();
  const [title, setTitle] = useState(Title);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [q, setQuery] = useState(imdbID);
  const [positivetweet, setPositivetweet] = useState(null);
  const [negativetweet, setNegativetweet] = useState(null);
  const [data, setData] = useState(null);
  const poster =
    movie === null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : movie.Poster === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : movie.Poster;
  // const title = movie == null ? "null" : movie.Title;
  console.log(JSON.stringify(title));

  useEffect(() => {
    setLoading(true);
    setError(null);
    setMovie(null);

    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a3b711b`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        // console.log(response.Response)
        if (response.Response === "False") {
          setError(response.Error);
          // console.log(JSON.stringify(response.Error))
        } else {
          setMovie(response);
          console.log(JSON.stringify(response));
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });

    fetch(`http://movie-social-api.herokuapp.com/${title}/tweets`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        console.log(JSON.stringify(response));
        if (response) {
          setData(response);
          setNegativetweet(response.most_negative_tweet);
          setPositivetweet(response.most_positive_tweet);
          // console.log(JSON.stringify(response.Error))
        } else {
          setError(response.Error);
          // console.log(JSON.stringify(movie))
        }
        // setLoading(false);
      })
      .catch(({ message }) => {
        // setError(message);
        // setLoading(false);
      });
  }, []);

  console.log(title);
  console.log(positivetweet);
  // console.log(JSON.stringify(negativetweet))

  return (
    <div className="App">
      <div className="m-container">
        <h1>Tweets Analysis</h1>
        <h1>{movie && movie.Title}</h1>
        {movie && poster && (
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
            // onClick={console.log(JSON.stringify(movie))}
          />
        )}
      </div>
      <div position="center">
        {positivetweet && <TwitterTweetEmbed tweetId={positivetweet} />}{" "}
      </div>
      <div>
        {negativetweet && <TwitterTweetEmbed tweetId={negativetweet} />}
      </div>
    </div>
  );
};

export default Description;
