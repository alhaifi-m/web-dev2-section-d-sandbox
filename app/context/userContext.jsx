'use client'
// 1- Create User Context
// 2-Create UserProvider
// 3-Create useUser custom Hook

import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children, userId }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const result = await response.json();
      setUserData(result);
    };
    fetchUserData();
  }, [userId]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext)
