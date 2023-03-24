import { createContext, useContext, useState } from "react";
import { color1, color2, color3 } from "../style/Colors";
import {spanish, english} from "../data/Language"
const appContext = createContext();
export const useApp = () => {
  const context = useContext(appContext);
  if (!context) throw new Error("No hay contexto de autenticación");
  return context;
};
export function AppProvider({ children }) {
    const [color, setColor] = useState();
    const [language, setLanguage]= useState();
    const [activeModal, setActiveModal] = useState(false);
    const activarModal = ()=>{
      setActiveModal(true)
    }
    const desactivarModal = ()=>{
      setActiveModal(false)
    }
    if (!color){
      let c
      try {
        c = localStorage.getItem("color")
      } catch (error) {
        
      }
      
      if (c){
        if (c === "-1"){
          return setColor( color2)
        }
        if (c === "0"){
          return setColor( color1)
        }
        if (c === "1"){
          return setColor( color3)
        }
      } else {
        console.log("color")
        return setColor(color1)
      }
    }
    if (!language){
      let l
      try {
        l = localStorage.getItem("idioma")
      } catch (error) {
        
      }
      if (l){
        if (l === "spanish"){
          return setLanguage(spanish)
        }
        if (l === "english"){
          return setLanguage(english)
        }
      } else {
        return setLanguage(spanish)
      }
    }
    const setNigth = () =>{
      localStorage.setItem("color", -1)
        return setColor(color2)
    }
    const setMid = () =>{
      localStorage.setItem("color", 0)
        return setColor(color1)
    }
    const setDay= () =>{
      localStorage.setItem("color", 1)
        return setColor(color3)
    }
    const setSpanish = () =>{
      localStorage.setItem("idioma", "spanish")
        setLanguage(spanish)
    }
    const setEnglish= () =>{
      localStorage.setItem("idioma", "english")
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
            activeModal,
            activarModal,
            desactivarModal,
          }}
        >
          {children}
        </appContext.Provider>
      );
    }
    