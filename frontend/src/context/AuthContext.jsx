import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../utils/storage";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(storage.getUser());
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!storage.getAccessToken()
  );

  useEffect(() => {
    const token = storage.getAccessToken();

    if (token && storage.getUser()) {
      setIsAuthenticated(true);
      setUser(storage.getUser());
    }
  }, []);

  const login = ({ token, user }) => {
    storage.setAccessToken(token);
    storage.setUser(user);

    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    storage.clear();
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}