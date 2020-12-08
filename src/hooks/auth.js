import React, { createContext, useCallback, useState } from "react";
import { useContext } from "react";
import api from "../services/api";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@Unidriving:token");
    const user = localStorage.getItem("@Unidriving:user");

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", { email, password });

    const { token, user } = response.data;

    localStorage.setItem("@Unidriving:token", token);
    localStorage.setItem("@Unidriving:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Unidriving:token");
    localStorage.removeItem("@Unidriving:user");

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, token: data.token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
