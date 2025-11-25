import React from "react";
import Movie from "../components/Movie";
import { dummy2 } from '../movieDummy2';

export default function TopMovies() {
  return (
    <div className="movies-container">
      {dummy2.results.map(movie => (
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
