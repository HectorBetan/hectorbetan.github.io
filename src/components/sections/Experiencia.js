import { useApp } from "../../context/AppContext";
function Experiencia(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="experiencia">
        <div className="resume-section-content">
          <h2 className=" mb-4  mb-md-5 text-center text-md-start" style={{color:color.menu}}>{language.expTitle}</h2>
          <div className="d-flex flex-column flex-lg-row justify-content-between">
            <div className="flex-grow-1">
              <h3 className="mb-0 me-2" style={{color:color.title1}}>FM SALUD SEXUAL – Dr. Fidel Mesa Millán</h3>
              <div className="subheading mb-1">{language.expSub1}</div>
              
            </div>
            
            <div className="flex-shrink-0">
              <span className="" style={{color:color.title1}}>{language.expDate1}</span>
            </div>
            
          </div>
          <div className="mt-3 mb-5">
          <p className="exp">
          {language.expText1}
              </p>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between mb-1">
            <div className="flex-grow-1">
              <h3 className="mb-0" style={{color:color.title1}}>TELEMARK SPAIN S.L. Sucursal Colombia</h3>
              <div className="subheading mb-1">{language.expSub2}</div>

            </div>
            <div className="flex-shrink-0">
              <span className="" style={{color:color.title1}}>
              {language.expDate2}
              </span>
            </div>
          </div>
          <div className="mt-3">
          <p className="exp mb-4">
          {language.expText2}
              </p>
          </div>
        </div>
      </section>
    )
}
export default Experiencia;