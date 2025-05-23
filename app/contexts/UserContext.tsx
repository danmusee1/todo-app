import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type User = { id: number; name: string; email: string };
type UserContextType = {
  user: User | null;
  token: string | null;
  setUser: (user: User | null, token?: string | null) => void;
  logout: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);
  const [token, setTokenState] = useState<string | null>(null);

  // Load user and token from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      setUserState(JSON.parse(savedUser));
      setTokenState(savedToken);
    }
  }, []);

  const setUser = (user: User | null, token: string | null = null) => {
    setUserState(user);
    setTokenState(token);

    if (user && token) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  };

  const logout = () => {
    setUser(null);
    setTokenState(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ user, token, setUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
};
