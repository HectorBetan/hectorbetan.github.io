import Perfil from "../assets/img/profile.jpg";
import { useApp } from "../context/AppContext";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
function Navigation() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { color, setNigth, setMid, setDay, language,  setSpanish, setEnglish } = useApp();
  const location = useLocation();
  const activar = (p) => {
    if (location.pathname === p) {
      return color.menuActive;
    } else {
      return color.menuItems;
    }
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  const handleChange = (e) => {
    let n = e.target.value;
    if (n === "1") {
      setNigth();
    }
    if (n === "0") {
      setMid();
    }
    if (n === "-1") {
      setDay();
    }
  };
  const handleLanguage = (e) =>{
    e.preventDefault()
    if (language.language === "Inglés / English"){
      setEnglish()
    }
    if (language.language === "Español / Spanish"){
      setSpanish()
    }
  }
  if (location)
    return (
      <nav
        className={`navbar navbar-expand-md fixed-top overflow-auto ${color.navbar}`}
        id="sideNav"
        style={{ backgroundColor: color.menu1 }}
      >
        <div className="w-50 d-none d-md-block mb-4">
          <div className="d-flex flex-row justify-content-evenly">
            <i
              className={color.sol}
              aria-hidden="true"
              style={{ color: color.day }}
            ></i>
            <i
              className={`bi bi-circle-half ${color.center}`}
              aria-hidden="true"
              style={{ color: color.mid }}
            ></i>
            <i
              className={color.luna}
              aria-hidden="true"
              style={{ color: color.nigth }}
            ></i>
          </div>

          <input
            type="range"
            id="vol"
            name="vol"
            min="-1"
            max="1"
            value={color.tema}
            style={{ width: "67%", color: color.menu }}
            onChange={(e) => {
              e.preventDefault();
              handleChange(e);
            }}
          />
        </div>
        <div className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-flex d-md-none fw-bold  nombre-nav" style={{color:color.menuItems}}>
          <img
                src={Perfil}
                alt=""
                className="me-3 img-nav"
                style={{ width: "40px", height: "40px", borderRadius: "20px", borderColor: color.border, borderStyle:"solid", borderWidth:"0.2rem"}}
                
              />
            <span className="fw-bold me-2" style={{color:color.idioma}}>
              
              Héctor</span> Betancourt</span>
          <span className="d-none d-md-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={Perfil}
              alt="..."
              style={{borderColor: color.border, borderStyle:"solid", borderWidth:"0.5rem"}}
            />
          </span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleShow();
          }}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{color:color.navItem}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
              >
                {language.menu1}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/experiencia") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/experiencia");
                }}
              >
                {language.menu2}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/educacion") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/educacion");
                }}
              >
                {language.menu3}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/skills") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/skills");
                }}
              >
                {language.menu4}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/proyectos") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/proyectos");
                }}
              >
                {language.menu7}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/intereses") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/intereses");
                }}
              >
                {language.menu5}
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link js-scroll-trigger"
                style={{ color: activar("/certificaciones") }}
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/certificaciones");
                }}
              >
                {language.menu6}
              </div>
            </li>
            <li className="nav-item mt-lg-4 m-2">
              <a
                className="ver-cv "
                role="button"
                href={language.pdf}
                target="_blank"
                rel="noreferrer"
                style={{ color: color.idioma }}
              >
                {language.cv}
              </a>
            </li>
          </ul>
        </div>
        <div
          className="d-md-flex flex-row justify-content-end m-3 mt-0 d-none"
          id="perfil"
        >
          <div role="button"
            className="text-decoration-none"
            href="english.html"
            style={{ color: color.idioma }}
          >
            <div className="m-2 mt-5 text-center" onClick={handleLanguage}>
              <img className="me-2" src={language.lanImg} alt="" />
              <strong>{language.language}</strong>
            </div>
          </div>
        </div>
        <Offcanvas
          style={{ position: "fixed", backgroundColor: color.menu1 }}
          placement="end"
          show={show}
          onHide={handleClose}
          className="navegacion d-md-none d-lg-none d-xl-none d-xxl-none pr-0 w-50"
        >
          <Offcanvas.Header closeButton closeVariant={color.closeVariant}>
            <Offcanvas.Title>
              <img
                src={Perfil}
                alt=""
                className=""
                style={{ width: "30px", height: "30px", borderRadius: "15px", borderColor: color.border, borderStyle:"solid", borderWidth:"0.2rem"}}
                
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column justify-content-between">
          <div className="text-center">
          <div className="d-flex flex-row justify-content-center">
            <i
              className={`me-4 ms-4 ${color.sol}`}
              aria-hidden="true"
              style={{ color: color.day }}
            ></i>
            <i
              className={`bi bi-circle-half me-3 ms-3 ${color.center}`}
              aria-hidden="true"
              style={{ color: color.mid }}
            ></i>
            <i
              className={`me-4 ms-4 ${color.luna}`}
              aria-hidden="true"
              style={{ color: color.nigth }}
            ></i>
          </div>

          <input
            type="range"
            id="vol"
            name="vol"
            min="-1"
            max="1"
            defaultValue={color.tema}
            style={{ color: color.menu }}
            onChange={(e) => {
              e.preventDefault();
              handleChange(e);
            }}
          />
        </div>
            <ul className="navbar-nav m-3">
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu1}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/experiencia") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/experiencia");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu2}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/educacion") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/educacion");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu3}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/skills") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/skills");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu4}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/proyectos") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/proyectos");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu7}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/intereses") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/intereses");
                    window.scrollTo(0, 0);
                    handleClose()
                  }}
                >
                  {language.menu5}
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link js-scroll-trigger"
                  style={{ color: activar("/certificaciones") }}
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/certificaciones");
                    handleClose()
                  }}
                >
                  {language.menu6}
                </div>
              </li>
              <li className="nav-item mt-lg-4 mt-2 m-1">
                <a
                  className="ver-cv "
                  role="button"
                  href={language.pdf}
                target="_blank"
                rel="noreferrer"
                  style={{ color: color.idioma }}
                >
                  {language.cv}
                </a>
              </li>
            </ul>
            <div
          className="d-flex flex-row justify-content-center mt-0"
          id="perfil"
        >
          <div  role="button"
            className="text-decoration-none"
            href="english.html"
            style={{ color: color.idioma }}
          >
            <div className="m-2 text-center fuente-lang" onClick={handleLanguage}>
              <img className="me-2" src={language.lanImg}  alt="" />
              <strong>{language.language}</strong>
            </div>
          </div>
        </div>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    );
}
export default Navigation;
