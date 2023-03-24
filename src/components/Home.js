import Navigation from "./Navigation";
import Perfil from "./sections/Perfil";
import Experiencia from "./sections/Experiencia";
import Educacion from "./sections/Educacion";
import Skills from "./sections/Skills";
import Intereses from "./sections/Intereses";
import Certificados from "./sections/Certificados";
import Proyectos from "./sections/Proyectos";
import { useApp } from "../context/AppContext";
import {useState, useEffect} from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
import '../style/Home.css';
const navs = ["/","/experiencia","/educacion","/skills","/proyectos", "/intereses", "/certificaciones"]
function Home(){
    const navigate = useNavigate()
    const location = useLocation()
    const num = navs.indexOf(location.pathname)
    const { color, language, setNigth, setMid, setDay, setSpanish, setEnglish, activeModal } = useApp()
    const [nav, setNav] = useState(num)
    const [tema, setTema] = useState()
    const [w, setW] = useState(window.innerWidth);
    const handleResize = () => {
        setW(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    useEffect(() => {
        const getNum = () =>{
            const a = navs.indexOf(location.pathname)
            return setNav(a)
            
        }
        if (num !== nav){
            return getNum()
        }
        
      }, [num, location, nav]);
      const handlers = useSwipeable;
        const { ref: documentRef } = handlers({
            onSwipedRight: () => {
                if(!activeModal){
                    if(nav!==0){
                        setNav(nav-1);
                        navigate(navs[nav-1])
                    } else {
                        setNav(6)
                        navigate(navs[6])
                    }
                }
            },
            onSwipedLeft: () =>{
                if(!activeModal){
                    if(nav!==6){
                        setNav(nav+1);
                        navigate(navs[nav+1])
                    } else {
                        setNav(0)
                        navigate(navs[0])
                    }
                }
            },
        })
      useEffect(() => {
        documentRef(document);
        // Clean up swipeable event listeners
        return () => documentRef({});
      });
    useEffect(() => {
        if (color && !tema){
            setTema(parseInt(color.tema))
            
        }
        
        const handleKeyPress = (event) =>{
            if(w>=768)
            {const { keyCode } = event;
            switch (keyCode) {
                case 39:
                    if (tema === 1){
                        setTema(-1)
                        setDay()
                    } else if (tema===0){
                        setTema(1)
                        setNigth()
                    } else if (tema ===-1){
                        setTema(0)
                        setMid()
                    }
                        
                  break;
                case 38:
                    if(!activeModal){
                        if(nav!==0){
                            setNav(nav-1);
                            navigate(navs[nav-1])
                        } else {
                            setNav(6)
                            navigate(navs[6])
                        }
                      break;
                    }
                    break;
                case 37:
                    if (tema === 1){
                        setTema(0)
                        setMid()
                    } else if (tema===0){
                        setTema(-1)
                        setDay()
                    } else if (tema ===-1){
                        setTema(1)
                        setNigth()
                    }
                  break;
                case 40:
                    if(!activeModal){
                        if(nav!==6){
                            setNav(nav+1);
                            navigate(navs[nav+1])
                        } else {
                            setNav(0)
                            navigate(navs[0])
                        }
                      break;
                    }
                    break;
                  case 76:

                    if(language.lang === "es"){
                        setEnglish()
                    } else {
                        setSpanish()
                    }
                  break;
                default:
                  break;}
                  
              }
        }
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [nav, navigate, tema, setDay, setMid, setNigth, color, language, setEnglish, setSpanish, w, activeModal]);
    const navCel = (pos) =>{
        window.scrollTo(0, 0);
        if (pos === "mas"){
            navigate(navs[nav+1])
            setNav(nav+1)
        } else{
            navigate(navs[nav-1])
            
            setNav(nav-1)
        }

    }
    if (color && language)
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
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/intereses" element={<Intereses />} />
                <Route path="/certificaciones" element={<Certificados />} />
            </Routes>
        </div>
        {nav !== 0 && <div className="d-md-none d-flex flex-row justify-content-between ico" style={{color: color.title1}}>
            <div className="text-start rotate-next" onClick={(e)=>{
                e.preventDefault()
                
                navCel("menos")
            }}>
                <i className="bi bi-fast-forward-fill pb-0 mb-5 ps-4 pe-4 m-3 me-sm-5 ms-sm-5"></i>
            </div>
            {nav !== 6 && nav !== 0 &&<div className="text-end" onClick={(e)=>{
                e.preventDefault()
                
                navCel("mas")
            }}>
            <i className="bi bi-fast-forward-fill pb-0 mb-5 ps-4 pe-4 m-3 me-sm-5 ms-sm-5"></i>
            </div>}
        </div>}
        {nav === 0 && <div className="d-md-none d-flex flex-row justify-content-end  ico"  style={{color: color.title1}}>
<div className="text-end" onClick={(e)=>{
                e.preventDefault()
                navCel("mas")
            }}>
<i className="bi bi-fast-forward-fill p-4 m-2 pb-0 mb-0"></i>
            </div>
        </div>}
        
    </div>
    )
}
   

export default Home;