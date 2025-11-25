import React from "react";
import Movie from "../components/Movie";
import { dummy } from '../movieDummy';
import { dummy2 } from '../movieDummy2';

export default function Home() {
  return (
    <div className="page-container">

      <div className="movie_box now_box">
        <h2>Now playing</h2>
        <div className="now movie_section">
          {dummy.results.slice(0, 4).map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>

      <div className="movie_box">
        <h2>Top Rated</h2>
        <div className="top movie_section">
          {dummy2.results.slice(0, 4).map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
