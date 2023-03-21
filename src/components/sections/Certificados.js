import { useApp } from "../../context/AppContext";
function Certificados(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="certificados">
        <div className="resume-section-content">
          <h2 className="mb-5" style={{color:color.title1}}>{language.certTitle}</h2>
          <ul className="fa-ul mb-0">
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>{language.certText1}</b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>{language.certText2}</b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>
              {language.certText3}
              </b>
              <br />
              Universidad Tecnológica de Pereira - 2021
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>
              {language.certText4}
              </b>
              <br />
              Universidad de Caldas - 2009
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>
              {language.certText5}
              </b>
              <br />
              Universidad Tecnológica de Pereira y Universidad Católica de
              Pereira - 2008
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>{language.certText6}</b>
              <br />
              Universidad Tecnológica de Pereira y Universidad Católica de
              Pereira - 2008
            </li>
            <li className="mb-3">
              <span className="fa-li">
                <i className="fas fa-angle-double-right" style={{color:color.icons, fill:color.icons}}></i>
              </span>
              <b>{language.certText7}</b>
              <br />
              Servicio Nacional de Aprendizaje, SENA - 2006
            </li>
          </ul>
        </div>
      </section>
    )
}
export default Certificados;