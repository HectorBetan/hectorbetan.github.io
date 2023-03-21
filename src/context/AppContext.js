import { createContext, useContext, useEffect, useState } from "react";
import { color1, color2, color3 } from "../style/Colors";
import {spanish, english} from "../data/Language"
const appContext = createContext();
export const useApp = () => {
  const context = useContext(appContext);
  if (!context) throw new Error("No hay contexto de autenticación");
  return context;
};
export function AppProvider({ children }) {
    const [color, setColor] = useState(color1);
    const [language, setLanguage]= useState(spanish);
    const setNigth = () =>{
        return setColor(color2)
    }
    const setMid = () =>{
        return setColor(color1)
    }
    const setDay= () =>{
        return setColor(color3)
    }
    const setSpanish = () =>{
        setLanguage(spanish)
    }
    const setEnglish= () =>{
        setLanguage(english)
    }
    return (
        <appContext.Provider
          value={{
            color,
            setNigth,
            setMid,
            setDay,
            language,
            setSpanish,
            setEnglish,
          }}
        >
          {children}
        </appContext.Provider>
      );
    }
    