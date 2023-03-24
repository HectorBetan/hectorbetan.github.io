import { useApp } from "../../context/AppContext";
function Perfil(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="perfil">
        <div className="resume-section-content">
          <h1 className="mb-0" style={{color:color.title2}}>
            Héctor
            <span className=""  style={{color:color.perfilTitle}}> Betancourt</span>
          </h1>
          <div className="subheading mb-2 mb-sm-3 mb-md-4 m-1">
            <span>Cali - Colombia</span> <span>·</span>{" "}
            <span>{language.cel}: +57 3185733093</span> <span>·</span>
            <span>
              <a href="mailto:hectorbetancourt1992@gmail.com"  style={{color:color.link}}>
                hectorbetancourt1992@gmail.com
              </a>
            </span>
          </div>
          <p className="lead mb-4 princ">
          {language.perfil}
          </p>
          <div className="social-icons text-end me-3">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/hector-hernan-betancourt-ramirez-159855108"
              target="_blank"
              rel="noreferrer"
              style={{backgroundColor:color.perfilIcons, color:color.background}}
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/HectorBetan"
              target="_blank"
              rel="noreferrer"
              style={{backgroundColor:color.perfilIcons, color:color.background}}
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    )
}
export default Perfil;