import { useApp } from "../../context/AppContext";
function Skills(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5"  style={{color:color.menu}}>Skills</h2>
          <br />
          <ul className="list-inline dev-icons"  style={{color:color.title1}}>
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
    )
}
export default Skills;