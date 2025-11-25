import React from "react";
import Movie from "../components/Movie";
import { dummy } from '../movieDummy';

export default function Movies() {
  return (
    <div className="movies-container">
      {dummy.results.map(movie => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          vote_average={movie.vote_average}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}
