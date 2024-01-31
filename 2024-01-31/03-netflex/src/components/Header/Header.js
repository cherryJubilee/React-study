import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth.context";
import ProfileContext from "../../contexts/profile.context";

function Header() {
  const { isLoggedIn, logOut } = useAuth();
  const { nickname } = useContext(ProfileContext);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        NETFLEX
      </Link>
      <nav>
        {isLoggedIn && (
          <button>
            <Link to="/mypage">마이페이지</Link>
          </button>
        )}

        <ul>
          {isLoggedIn ? (
            //로그인 상태일 때
            <>
              {nickname && (
                <li>
                  <span>안녕하세요, {nickname}님!</span>
                </li>
              )}
              <li>
                <button onClick={logOut}>로그아웃</button>
              </li>
            </>
          ) : (
            // 로그인 상태가 아닐 때
            <li>
              <Link to="/sign-in">로그인하기</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
