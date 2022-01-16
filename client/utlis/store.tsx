import { createContext, useContext, useState, useEffect } from "react";
import useSwr from "swr";
import { useRouter } from "next/router";
import * as services from "./services";

type ContextTypes = {
  isAuthenticated;
  setIsAuthenticated;
  user;
  loading;
  setLoading;
};

const initialValues: ContextTypes = {
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  loading: false,
  setLoading: () => {},
};

const StoreContext = createContext<ContextTypes>(initialValues);

export const StoreProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    if (token) {
      setIsAuthenticated(true);
    }

    if (isAuthenticated) {
      services.getMe().then((user) => {
        console.log(user.data, user);

        setUser(user.data);
        setLoading(false);
      });
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [isAuthenticated]);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user,
    loading,
    setLoading,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useAuthenication = () => {
  const { isAuthenticated, setIsAuthenticated, user, loading } =
    useContext(StoreContext);
  const router = useRouter();

  const login = async (data) => {
    const { token } = await services.login(data);
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    router.push("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return {
    login,
    isAuthenticated,
    logout,
    user,
    loading,
  };
};

const cards = [
  {
    id: "card-1",
    title: "Maths Data",
  },
  {
    id: "card-2",
    title: "Buy classroom supplies",
  },
  {
    id: "card-3",
    title: "Take Assignment 2",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Resources",
      cards,
    },
    "list-2": {
      id: "list-2",
      title: "To Do",
      cards: [],
    },
    "list-3": {
      id: "list-3",
      title: "Doing",
      cards: [],
    },
  },
  listIds: ["list-1", "list-2", "list-3"],
};

export default data;
