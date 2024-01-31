import React, { useContext, useState } from "react";
import styles from "./MoviesListItem.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import ProfileContext from "../../contexts/profile.context";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, likeMovies, unLikeMovies } = useContext(ProfileContext);

  const isLiked = likedMovies.includes(movie.id);

  const changeLike = () => {};

  return (
    <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />

      <h6>{movie.title}</h6>
      {isLoggedIn && (
        <div onClick={changeLike} className={styles.movieLikeBtn}>
          {isLiked ? "" : "🤍"}
        </div>
      )}
    </Link>
  );
}

export default MoviesListItem;
