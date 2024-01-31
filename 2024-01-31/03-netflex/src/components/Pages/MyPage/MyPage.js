import React, { useContext, useState } from "react";
import styles from "./MyPage.module.scss";
import ProfileContext from "../../../contexts/profile.context";

function MyPage() {
  const { nickname, setNickname } = useContext(ProfileContext);
  const [newNickname, setNewNickname] = useState(nickname);
  const { likedMovies, unlikeMovie } = useContext(ProfileContext);

  const handleNicknameChange = (event) => {
    setNewNickname(event.target.value);
  };

  const handleNicknameSave = () => {
    setNickname(newNickname);
    return alert("닉네임이 설정 되었습니다");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>My Page</h1>
      </header>
      <h3>⭐️ 닉네임 설정</h3>
      <div className={styles.nicknameForm}>
        <input
          className={styles.nickname}
          type="text"
          value={newNickname}
          onChange={handleNicknameChange}
          placeholder="닉네임 적어주세요"
        />
        <button className={styles.nicknameBtn} onClick={handleNicknameSave}>
          닉네임 저장
        </button>
      </div>

      <header className={styles.header}>
        <h1>좋아하는 영화</h1>
        <ul>
          {likedMovies.map((movie) => (
            <li key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <h3>{movie.title}</h3>
              <button onClick={() => unlikeMovie(movie.id)}>좋아요 취소</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
export default MyPage;
