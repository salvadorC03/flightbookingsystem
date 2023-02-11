import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import { ContextValueObj, User } from "./types";

export const getExpirationTime = (expirationDate: string): number => {
  const expirationMillis = new Date(expirationDate).getTime();
  const currentTimeMillis = new Date().getTime();
  return expirationMillis - currentTimeMillis;
};

export const Context = createContext<ContextValueObj>({
  initializing: true,
  isLoggedIn: false,
  login: (user: User) => {},
  logout: () => {},
  user: null,
});

const ContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  let timeout: NodeJS.Timeout | undefined;

  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);
  const router = useRouter();

  let isLoggedIn = !!user;

  function login(user: User) {
    setUser(user);
    timeout = setTimeout(logout, getExpirationTime(user.token.expiresIn));
  }

  function logout() {
    setUser(null);
    clearTimeout(timeout);
  }

  useEffect(() => {
    setInitializing(true);

    setTimeout(async () => {
      if (!isLoggedIn) await router.replace("/login");
      if (isLoggedIn) await router.replace("/home");
      setInitializing(false);
    }, 2000);
  }, [isLoggedIn]);

  const value = {
    initializing,
    isLoggedIn,
    login,
    logout,
    user,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ContextProvider;
