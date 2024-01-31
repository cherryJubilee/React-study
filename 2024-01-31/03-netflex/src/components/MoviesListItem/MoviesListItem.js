import styles from "./MoviesListItem.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import React, { useContext } from "react";
import ProfileContext from "../../contexts/profile.context";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();
  const { likedMovies, addLikedMovie, removeLikedMovie } =
    useContext(ProfileContext);

  const isLiked = likedMovies.some((likedMovie) => likedMovie.id === movie.id);

  const handleLike = (event) => {
    event.stopPropagation();

    if (isLiked) {
      removeLikedMovie(movie.id);
    } else {
      addLikedMovie(movie);
    }
  };

  return (
    <body className={styles.wrapper}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.title}
        />
      </Link>

      <section className={styles.movieContent}>
        <h6>{movie.title}</h6>
        {isLoggedIn && (
          <button className={styles.movieLikeBtn} onClick={handleLike}>
            <span className={styles.heartIcon}>{isLiked ? "❤️" : "🤍"}</span>
          </button>
        )}
      </section>
    </body>
  );
}

export default MoviesListItem;
