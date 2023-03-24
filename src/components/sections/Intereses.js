import { useApp } from "../../context/AppContext";
function Intereses(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="intereses">
        <div className="resume-section-content">
          <h2 className=" mb-3  mb-md-4 text-center text-md-start" style={{color:color.menu}}>{language.interesesTitle}</h2>
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