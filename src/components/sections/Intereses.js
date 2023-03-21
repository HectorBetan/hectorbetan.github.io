import { useApp } from "../../context/AppContext";
function Intereses(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="intereses">
        <div className="resume-section-content">
          <h2 className="mb-5" style={{color:color.title1}}>{language.interesesTitle}</h2>
          <p className="interests">
          {language.interesesText1}
          </p>
          <p className="mb-0 interests">
          {language.interesesText2}
          </p>
        </div>
      </section>
    )
}
export default Intereses;