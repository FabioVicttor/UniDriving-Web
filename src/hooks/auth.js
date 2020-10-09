import React, { createContext, useCallback, useState } from 'react';
import { useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const [data, setData] = useState({});

  const signIn = useCallback(async ({ email, password}) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;
    
    setData({ token, user});
  }, []);

  const signOut = useCallback(() => {
    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
};
