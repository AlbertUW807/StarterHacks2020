import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
// import { Chart } from "react-google-charts";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.adorama.com/alc/wp-content/plugins/itc-types/images/no-image.jpg";

  const options = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false
  };

const Description = () => {
  const { imdbID, Title } = useParams();
  const [title, setTitle] = useState(Title);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [positivetweet, setPositivetweet] = useState(null);
  const [negativetweet, setNegativetweet] = useState(null);
  const [negativeSentiment, setNegativeSentiment] = useState(null);
  const [positiveSentiment, setPositiveSentiment] = useState(null);
  const poster =
    movie === null
      ? DEFAULT_PLACEHOLDER_IMAGE
      : movie.Poster === "N/A"
      ? DEFAULT_PLACEHOLDER_IMAGE
      : movie.Poster;
  console.log(JSON.stringify(title));

  const data = [
    ["Positive Tweets Sentiment","Positive Tweets Sentiment"],
    [negativeSentiment,positiveSentiment]
  ]

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

    fetch(`//movie-social-api.herokuapp.com/${title}/tweets`)
      .then(resp => resp)
      .then(resp => resp.json())
      .then(response => {
        console.log(JSON.stringify(response));
        if (response) {
          console.log(response.negative_sentiment_ratio)
          setNegativetweet(response.most_negative_tweet);
          setPositivetweet(response.most_positive_tweet);
          // setPositiveSentiment(response)
        } else {
          setError(response.Error);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <div className="m-container">
        <Jumbotron fluid>
          <h1>Tweets Analysis</h1>
        </Jumbotron>
        <h1>{movie && movie.Title}</h1>
        {movie && poster && (
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        )}
      </div>
      <CardGroup>
        <Card>
          <Card.Title>
            <div class="align-items-center">Most Positive Tweet</div>
          </Card.Title>
          <Card.Body>
            <div class="card align-items-center">
              {positivetweet && <TwitterTweetEmbed tweetId={positivetweet} />}
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Title>Most Negative Tweet</Card.Title>
          <Card.Body>
            <div class="card align-items-center">
              {negativetweet && <TwitterTweetEmbed tweetId={negativetweet} />}
            </div>
          </Card.Body>
        </Card>
      </CardGroup>

    

    
    </div>
  );
};

export default Description;
