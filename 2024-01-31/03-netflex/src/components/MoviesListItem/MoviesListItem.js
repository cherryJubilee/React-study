import styles from "./MoviesListItem.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";

function MoviesListItem({ movie }) {
  const { isLoggedIn } = useAuth();

  return (
    <Link to={`/movies/${movie.id}`} className={styles.wrapper}>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt={movie.title}
      />

      <h6>{movie.title}</h6>
      {isLoggedIn && (
        <button className={styles.movieLikeBtn}>좋아요 버튼 자리</button>
      )}
    </Link>
  );
}

export default MoviesListItem;
