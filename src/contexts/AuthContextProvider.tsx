import { UserData } from '@src/types';
import React, { ReactNode, createContext, useContext, useState } from 'react';

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextProviderValue = {
  user: string | null;
  onSignIn: (user: string, callback: () => void) => void;
  onSignUp: (userData: UserData, callback: () => void) => void;
  onSignOut: (callback: () => void) => void;
};

const AuthContext = createContext<AuthContextProviderValue>({
  user: null,
  onSignIn: () => undefined,
  onSignUp: () => undefined,
  onSignOut: () => undefined,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null);

  const onSignIn = (user: string, callback: () => void) => {
    setUser(user);
    localStorage.setItem('user', user);
    callback();
  };

  const onSignUp = (userData: UserData, callback: () => void) => {
    const users = JSON.parse(localStorage.getItem('users')) || {};

    localStorage.setItem('users', JSON.stringify({ ...users, [userData.username]: userData }));
    callback();
  };

  const onSignOut = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem('user');
    callback();
  };

  const value = {
    user,
    onSignIn,
    onSignOut,
    onSignUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
