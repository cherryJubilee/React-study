import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import getTMDBImgSrc from "../../../utils/getTMDBImgSrc";
import styles from "./MoviesDetailPage.module.scss";
import { useAuth } from "../../../contexts/auth.context";
import ProfileContext from "../../../contexts/profile.context";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { isLoggedIn } = useAuth();
  const { likedMovies, addLikedMovie, removeLikedMovie } =
    useContext(ProfileContext);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      removeLikedMovie(movie.id);
    } else {
      addLikedMovie(movie);
    }
    setIsLiked(!isLiked); // Toggle the isLiked state
  };

  useEffect(() => {
    api.movies.getMovie(movieId).then((movieData) => {
      setMovie(movieData);
      setIsLiked(
        likedMovies.some((likedMovie) => likedMovie.id === movieData.id)
      );
    });
  }, [movieId, likedMovies]); // Add likedMovies as a dependency
  if (movie === null) return null;

  console.log("movie", movie);

  return (
    <div className={styles.wrapper}>
      <section className={styles.mainInfo}>
        <img
          className={styles.posterImg}
          src={getTMDBImgSrc(movie.poster_path)}
          alt={movie.title}
        />

        <div className={styles.mainInfoRight}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <ul className={styles.genres}>
            {movie.genres.map((genre) => (
              <li key={genre.id}># {genre.name}</li>
            ))}
          </ul>
          <strong>👑 평점 {movie.vote_average}</strong>
          {isLoggedIn && (
            <button className={styles.movieLikeBtn} onClick={handleLike}>
              <span className={styles.heartIcon}>{isLiked ? "❤️" : "🤍"}</span>
            </button>
          )}{" "}
        </div>
      </section>

      {/* <section className={styles.backdrop}>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      </section> */}
    </div>
  );
}

export default MoviesDetailPage;
