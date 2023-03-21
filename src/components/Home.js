import Navigation from "./Navigation";
import Perfil from "./sections/Perfil";
import Experiencia from "./sections/Experiencia";
import Educacion from "./sections/Educacion";
import Skills from "./sections/Skills";
import Intereses from "./sections/Intereses";
import Certificados from "./sections/Certificados";
import { useApp } from "../context/AppContext";
import {useState, useEffect} from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate()
    const { color } = useApp()
    const [nav, setNav] = useState(0)
    
    useEffect(() => {
        const navs = ["/","/experiencia","/educacion","/skills", "/intereses", "/certificados"]
        const handleKeyPress = (event) =>{
            const { keyCode } = event;
            switch (keyCode) {
    
                case 39:
                    if(nav!==5){
                        
                        setNav(nav+1);
                        navigate(navs[nav+1])
                    } else {
                        setNav(0)
                        navigate(navs[0])
                    }
                        
                  break;
                case 38:
                    if(nav!==0){
                        setNav(nav-1);
                        navigate(navs[nav-1])
                    } else {
                        setNav(5)
                        navigate(navs[5])
                    }
                  break;
                case 37:
                    
                    if(nav!==0){
                        setNav(nav-1);
                        navigate(navs[nav-1])
                    } else {
                        setNav(5)
                        navigate(navs[5])
                    }
                  break;
                case 40:
                    if(nav!==5){
                        setNav(nav+1);
                        navigate(navs[nav+1])
                    } else {
                        setNav(0)
                        navigate(navs[0])
                    }
                  break;
                default:
                  break;
              }
        }
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [nav, navigate]);
    
    return(
    <div className="d-flex flex-column" style={{backgroundColor: color.background, color: color.text1}}>
        <div className="">
            <Navigation></Navigation>
        </div>
        <div className="">

            <Routes>
                <Route path="/" element={<Perfil />} />
                <Route path="/experiencia" element={<Experiencia />} />
                <Route path="/educacion" element={<Educacion />} />
                <Route path="/skills" element={<Skills  />} />
                <Route path="/intereses" element={<Intereses />} />
                <Route path="/certificados" element={<Certificados />} />
            </Routes>
        </div>
        
        
    </div>
    )
}
   

export default Home;