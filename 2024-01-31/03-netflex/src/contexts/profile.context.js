// ProfileContext.js
import React, { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");

  const value = {
    nickname,
    setNickname,
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
