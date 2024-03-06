'use client'
import Cookies from "js-cookie";
import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const setCookie = (name, value) =>{
    Cookies.set(name, value, { expires: 1/12 });
}
const getCookie = (name) =>{
    return Cookies.get(name);
}
const deleteCookie = (name) =>{
    Cookies.remove(name);
}

const logout = (setIsLogged) => {
  deleteCookie("AuthCookie");
  setIsLogged(false);
  console.warn("Modo Admin Desactivado");
};

export function AuthProvider({ children }) {

    const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, setCookie, getCookie, deleteCookie, logout: ()=> logout(setIsLogged) }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);