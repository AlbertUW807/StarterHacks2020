import React from "react";
import { Link } from "react-router-dom";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://www.adorama.com/alc/wp-content/plugins/itc-types/images/no-image.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      {console.log(JSON.stringify(movie))}
      <div>
        <Link
          to={`/movie/${movie.imdbID}`}
          onClick={() => {
            console.log(JSON.stringify(movie));


          }}
        >
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
            onClick={console.log(JSON.stringify(movie))}
          />
        </Link>
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
