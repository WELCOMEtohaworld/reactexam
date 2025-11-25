import React from "react";
import Movie from "../components/Movie";
import { dummy3 } from '../movieDummy3';

export default function Upcoming() {
  return (
    <div className="movies-container">
      {dummy3.results.map(movie => (
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
