import { useApp } from "../../context/AppContext";

function Educacion(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="educacion">
        <div className="resume-section-content">
          <h2 className=" mb-4  mb-md-5 text-center text-md-start"  style={{color:color.menu}}>{language.eduTitle}</h2>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0" style={{color:color.title1}}>
              {language.eduSub1}
              </h3>
              <div className="subheading mb-md-3">
                Universidad Tecnológica de Pereira / MINTIC
              </div>
            </div>
            <div className="flex-shrink-0 ms-md-5">
              <span className="fs-4 mt-2" style={{color:color.title1}}>2021</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0" style={{color:color.title1}}>
              {language.eduSub2}
              </h3>
              <div className="subheading mb-md-3">
                Universidad Tecnológica de Pereira
              </div>
            </div>
            <div className="flex-shrink-0 ms-md-5">
              <span className="fs-4 mt-2"  style={{color:color.title1}}>2014</span>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-4">
            <div className="flex-grow-1">
              <h3 className="mb-0" style={{color:color.title1}}>
              {language.eduSub3}
                <br />{language.eduSub4}
              </h3>
              <div className="subheading mb-md-3">
                Institución Educativa Augusto Zuluaga Patiño
              </div>
            </div>
            <div className="flex-shrink-0 ms-md-5">
              <span className=" fs-4 mt-2"  style={{color:color.title1}}>2006</span>
            </div>
          </div>
        </div>
      </section>
    )
}


export default Educacion;
