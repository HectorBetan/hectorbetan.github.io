import Perfil from "../assets/img/profile.jpg"
import { useApp } from "../context/AppContext";
import { useLocation } from "react-router-dom";
import ScrollSpy from 'react-ui-scrollspy'
function HomeView() {
  const { color } = useApp()
  const location = useLocation()
  const activar = (id) => {
    if (location.hash === id) {
      return color.menuactive;
    } else {
      return color.menuitems;
    }
  };
  return (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top" id="sideNav" style={{backgroundColor:color.menu}}>
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-md-none">Héctor Betancourt</span>
            <span className="d-none d-md-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2"
                    src={Perfil} alt="..." /></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
                className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav" id="lista">

                <li className="nav-item"><a className="nav-link" href="#perfil" >Perfil</a></li>
                <li className="nav-item"><a className="nav-link" href="#experiencia" data-to-scrollspy-id="experiencia">Experiencia</a></li>
                <li className="nav-item"><a className="nav-link" href="#educacion" data-to-scrollspy-id="educacion">Educación</a></li>
                <li className="nav-item"><a className="nav-link" href="#skills" data-to-scrollspy-id="skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link" href="#intereses" data-to-scrollspy-id="intereses">Intereses</a></li>
                <li className="nav-item"><a className="nav-link" href="#certificados" data-to-scrollspy-id="certificados">Certificaciones</a></li>
                <li className="nav-item mt-lg-4 m-2"><a className="ver-cv " href="hectorbetancourt_cv.pdf" target="_blank">Ver
                        CV</a></li>

            </ul>
        </div>
    </nav>
    <div id="page-top" data-bs-spy="scroll" data-bs-target="#lista" data-bs-offset="0">
      <section className="resume-section" id="perfil">
        <div className="resume-section-content">
          <h1 className="mb-0 color">
            Héctor
            <span className="text-primary">Betancourt</span>
          </h1>
          <div className="subheading mb-5 m-1">
            <span>Cali - Colombia</span> <span>·</span>{" "}
            <span>Celular: +57 3185733093</span> <span>·</span>
            <span>
              <a href="mailto:hectorbetancourt1992@gmail.com">
                hectorbetancourt1992@gmail.com
              </a>
            </span>
          </div>
          <p className="lead mb-5 princ">
            Licenciado en Comunicación e Informática educativa con experiencia
            académica y laboral en mútiples campos, como el diseño y creación de
            páginas web, manejo de múltiples lenguajes de programación,
            framewoks y librerías, producción y edición de piezas gráficas y
            audiovisuales, manejo avanzado de software de diseño. Capacidad de
            gestión y evaluación de proyectos, conocimiento en diferentes tipos
            de lenguajes de programación, software, tecnologías y sistemas,
            proporcionando soluciones en diversos campos de acuerdo a las
            labores y objetivos propuestos. Flexibilidad y adaptabilidad en
            diversos campos laborales, proactivo, responsable, capacidad de
            adaptación al cambio, disposición al aprendizaje, habilidad para el
            trabajo individual, y trabajo en equipo.
          </p>
          <div className="social-icons ml-2">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/hector-hernan-betancourt-ramirez-159855108"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/HectorBetan"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
      <section className="resume-section" id="experiencia">
        <div className="resume-section-content">
          <h2 className="mb-5">Experiencia</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">FM SALUD SEXUAL – Dr. Fidel Mesa Millán</h3>
              <div className="subheading mb-3">Auxiliar Administrativo</div>
              <p className="exp col-lg-11">
                Creación de piezas publicitarias, gestión de redes sociales y
                manejo de software médico. Búsqueda, comunicación y relación con
                proveedores de suministros y médicos especialistas en otras
                áreas para realización de alianzas. Coordinación de labores
                administrativas para el correcto funcionamiento del consultorio
                médico, gestión de archivos y documentos relacionados con el
                campo de la salud. Atención y servicio al cliente.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">Noviembre 2017 – Junio 2019</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="flex-grow-1">
              <h3 className="mb-0">TELEMARK SPAIN S.L. Sucursal Colombia</h3>
              <div className="subheading mb-3">Diseñador Web</div>
              <p className="exp">
                Diseño de páginas web para clientes en España, Argentina, Chile
                y Perú. Creación de piezas visuales para las páginas web y
                montaje en software de diseño web o HTML. Brindar asesoría al
                cliente para el óptimo desarrollo de la página web de acuerdo a
                parámetros publicitarios y de diseño, así como para la mejora y
                actualización de páginas web. Desarrollo de SEO y Google Adworks
                para las páginas web.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-primary">
                Octubre 2013 - Diciembre 2015
              </span>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-0" />
      
      <hr className="m-0" />
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <br />
          <ul className="list-inline dev-icons">
            <li className="list-inline-item" title="HTML5">
              <i className="fab fa-html5 m-1"></i>
            </li>
            <li className="list-inline-item" title="CSS3">
              <i className="fab fa-css3-alt m-1"></i>
            </li>
            <li className="list-inline-item" title="JavaScript">
              <i className="fab fa-js-square m-1"></i>
            </li>
            <li className="list-inline-item" title="Java">
              <i className="fab fa-java m-1"></i>
            </li>
            <li className="list-inline-item" title="Python">
              <i className="fab fa-python m-1"></i>
            </li>
            <li className="list-inline-item" title="Linux">
              <i className="fab fa-linux m-1"></i>
            </li>
            <li className="list-inline-item" title="Bootstrap">
              <i className="fab fa-bootstrap m-1"></i>
            </li>
            <li className="list-inline-item" title="Vue.js">
              <i className="fab fa-vuejs m-1"></i>
            </li>
            <li className="list-inline-item" title="Node.js">
              <i className="fab fa-node m-1"></i>
            </li>
            <li className="list-inline-item" title="npm">
              <i className="fab fa-npm m-1"></i>
            </li>
            <li className="list-inline-item" title="Git">
              <i className="fab fa-git-square m-1"></i>
            </li>
            <li className="list-inline-item" title="Android Development">
              <i className="fab fa-android m-1"></i>
            </li>
          </ul>
          <br />
          <div className="container">
            <div className="row fw-bold">
              <div className="col-sm-6 col-md-3 col-lg-3">
                VISUAL STUDIO CODE
                <br />
                APACHE NETBEANS
                <br />
                ANDROID STUDIO
              </div>
              <div className="col-sm-5 col-md-3 col-lg-2">
                SQL
                <br />
                FIREBASE
                <br />
                MONGODB
              </div>
              <div className="col-sm-6 col-md-3 col-lg-3">
                DBEAVER
                <br />
                AGILE DEVELOPMENT & SCRUM
                <br />
                DESARROLLO DE SOFTWARE
              </div>
              <div className="col-sm-5 col-md-3 col-lg-3">
                ADOBE PHOTOSHOP
                <br />
                ADOBE PREMIERE
                <br />
                ADOBE AUDITION
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div className="row fw-bold">
              <div className="col-sm-12 col-md-5 col-lg-5">
                Formación en educación y pedagogía.
                <br />
                Lenguajes gráficos y audiovisuales.
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                Microsoft Office Suite (Word, Excel, Power Point).
                <br />
                Idiomas: Inglés conversacional y Español nativo.
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>

      <hr className=" m-0" />

      <section className="resume-section" id="intereses">
        <div className="resume-section-content">
          <h2 className="mb-5">Intereses</h2>
          <p className="interests">
            Debido a mi formación y relación constante con las TIC's, tengo
            algunos interesés personales relacionados con la tecnología, me
            encanta producir, crear, grabar y editar videos como hobby, además
            me gusta crear "mods" para videojuegos, que son, modificaciones
            hechas por usuarios a un videojuego para crear cosas nuevas o
            adaptarlo a su gusto. Adicionalmente invierto algo de mi tiempo
            libre explorando y aprendiendo nuevas tecnologías.
          </p>
          <p className="mb-0 interests">
            También, Me gusta salir de viaje y conocer nuevos lugares, me
            encanta cocinar y aprender cosas nuevas en la cocina y compartir
            tiempo con las personas que amo.
          </p>
        </div>
      </section>
      <hr className="m-0" />

      <section className="resume-section" id="certificados">
        <div className="resume-section-content">
          <h2 className="mb-5">Certificaciones</h2>
          <ul className="fa-ul mb-0">
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>Programa Misión TIC 2022 - Ciclo 3: Desarrollo de Software</b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>Programa Misión TIC 2022 - Ciclo 2: Programación Básica</b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>
                Programa Misión TIC 2022 - Ciclo 1: Fundamentos de Programación
              </b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>
                III Seminario Internacional sobre Familia: las Familias el Reto
                de la Diversidad
              </b>
              <br />
              Universidad de Caldas - 2009
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>
                Seminario Taller Grupos Operativos y Técnicas Psicodramáticas
              </b>
              <br />
              Universidad Tecnológica de Pereira y Universidad Católica de
              Pereira - 2008
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>Curso de Formación de Operadores Grupales</b>
              <br />
              Universidad Tecnológica de Pereira y Universidad Católica de
              Pereira - 2008
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right text-warning"></i>
              </span>
              <b>Trabajador Calificado en Recursos Naturales</b>
              <br />
              Servicio Nacional de Aprendizaje, SENA - 2006
            </li>
          </ul>
        </div>
      </section>
    </div>
    
    </div>
    
  );
}
export default HomeView;
