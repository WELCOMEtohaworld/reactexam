import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { img_base_url } from "../components/Movie";
import { dummy } from '../movieDummy';
import { dummy2 } from '../movieDummy2';
import { dummy3 } from '../movieDummy3';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  // 모든 영화 데이터를 합치기
  const allMovies = [
    ...dummy.results,
    ...dummy2.results,
    ...dummy3.results
  ];

  // state가 없으면 title로 검색
  const movie = state || allMovies.find(m => m.title === title);

  if (!movie) {
    return (
      <div className="page-container">
        <div>영화를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="detail_box">
        <div className="img_box">
          <img src={img_base_url + movie.poster_path} alt="영화포스터이미지" />
        </div>
        <div className="content_box">
          <div className="title_box">
            <span className="average">평점 : {movie.vote_average}</span>
            <span className="title">{movie.title}</span>
          </div>
          <div className="overview">{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
