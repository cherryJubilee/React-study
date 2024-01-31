// ProfileContext.js
import React, { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const addLikedMovie = (movie) => {
    setLikedMovies((prevLikedMovies) => [...prevLikedMovies, movie]);
  };

  const removeLikedMovie = (movieId) => {
    setLikedMovies((prevLikedMovies) =>
      prevLikedMovies.filter((movie) => movie.id !== movieId)
    );
  };

  const value = {
    nickname,
    setNickname,
    likedMovies,
    addLikedMovie,
    removeLikedMovie,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
