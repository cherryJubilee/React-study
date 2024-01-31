import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../api/api";
import getTMDBImgSrc from "../../../utils/getTMDBImgSrc";
import styles from "./MoviesDetailPage.module.scss";
import ProfileContext from "../../../contexts/profile.context";

function MoviesDetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { likeMovie } = useContext(ProfileContext);

  useEffect(() => {
    api.movies.getMovie(movieId).then((movieData) => setMovie(movieData));
  }, [movieId]);

  const handleLike = () => {
    if (movie) {
      likeMovie({
        id: movie.id,
        title: movie.title,
        img: getTMDBImgSrc(movie.poster_path),
      });
    }
  };

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
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <strong>{movie.vote_average}</strong>
          <button className={styles.likeBtn}>좋아요</button>
        </div>
      </section>

      <section>
        <img src={getTMDBImgSrc(movie.backdrop_path)} alt={movie.title} />
      </section>
    </div>
  );
}

export default MoviesDetailPage;
