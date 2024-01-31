// ProfileContext.js
import React, { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");
  const [likedMovies, setLikedMovies] = useState([]);

  const likeMovie = (movie) => {
    if (!likedMovies.find((m) => m.id === movie.id)) {
      setLikedMovies([...likedMovies, movie]);
    }
  };

  const unlikeMovie = (movieId) => {
    setLikedMovies(likedMovies.filter((m) => m.id !== movieId));
  };

  const value = {
    likedMovies,
    likeMovie,
    unlikeMovie,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
