import React from "react";

import Movie from "./Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  console.log(props.deleteMovie);

  return (
    <div>
      <p>You can delete list with the click</p>
      <ul className={classes["movies-list"]}>
        {props.movies.map((movie) => (
          <Movie
            id={movie.id}
            key={movie.id}
            title={movie.title}
            releaseDate={movie.releaseDate}
            openingText={movie.openingText}
            deletee={props.deleteMovie}
          />
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
