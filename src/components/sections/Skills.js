import { useApp } from "../../context/AppContext";
function Skills(){
    const { color, language } = useApp()
    return(
        <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className=" mb-4  mb-md-5 text-center text-md-start"  style={{color:color.menu}}>Skills</h2>
          <ul className="list-inline dev-icons d-xl-flex justify-content-evenly text-center"  style={{color:color.title1}}>
            <li className="list-inline-item" title="HTML5">
              <i className="fab fa-html5 ms-1 me-1"></i>
              <div className="">HTML5</div>
            </li>
            <li className="list-inline-item" title="CSS3">
              <i className="fab fa-css3-alt ms-1 me-1"></i>
              <div className="">CSS3</div>
            </li>
            <li className="list-inline-item" title="JavaScript">
              <i className="fab fa-js-square ms-1 me-1"></i>
              <div className="">JS</div>
            </li>
            <li className="list-inline-item" title="Java">
              <i className="fab fa-java  ms-1 me-1"></i>
              <div className="">JAVA</div>
            </li>
            <li className="list-inline-item" title="Python">
              <i className="fab fa-python  ms-1 me-1"></i>
              <div className="">PYTHON</div>
            </li>
            <li className="list-inline-item" title="Linux">
              <i className="fab fa-linux  ms-1 me-1"></i>
              <div className="">LINUX</div>
            </li>
            <li className="list-inline-item" title="Bootstrap">
              <i className="fab fa-bootstrap  ms-1 me-1"></i>
              <div className="">BOOTSTRAP</div>
            </li>
            <li className="list-inline-item" title="Vue.js">
              <i className="fab fa-vuejs  ms-1 me-1"></i>
              <div className="">VUE</div>
            </li>
            <li className="list-inline-item" title="Node.js">
              <i className="fab fa-node ms-1 me-1"></i>
              <div className="">NODE</div>
            </li>
            <li className="list-inline-item" title="npm">
              <i className="fab fa-npm  ms-1 me-1"></i>
              <div className="">NPM</div>
            </li>
            <li className="list-inline-item" title="Git">
              <i className="fab fa-git-square  ms-1 me-1"></i>
              <div className="">GIT</div>
            </li>
            <li className="list-inline-item" title="Android Development">
              <i className="fab fa-android  ms-1 me-1"></i>
              <div className="">ANDROID</div>
            </li>
          </ul>
          <div className="container mt-md-4 mt-lg-5 mt-3 skills-items">
            <div className="row fw-bold justify-content-evenly">
              <div className="col-sm-6 col-md-6  col-lg-6 col-xl-3">
                VISUAL STUDIO CODE
                <br />
                APACHE NETBEANS
                <br />
                ANDROID STUDIO
              </div>
              <div className="col-sm-5  col-md-5  col-lg-5 col-xl-2">
                SQL
                <br />
                FIREBASE
                <br />
                MONGODB
              </div>
              <div className="col-sm-6 col-md-6  col-lg-6 col-xl-3">
                DBEAVER
                <br />
                AGILE DEVELOPMENT & SCRUM
                <br />
                {language.skillsSoft}
              </div>
              <div className="col-sm-5  col-md-5  col-lg-5 col-xl-2">
                ADOBE PHOTOSHOP
                <br />
                ADOBE PREMIERE
                <br />
                ADOBE AUDITION
              </div>
            </div>
          </div>
          <br />
          <div className="container">
            <div className="row fw-bold justify-content-evenly text-sm-center skills">
              <div className="col-12 col-xl-5">
                {language.skillsText1}
                <br />
                {language.skillsText2}
              </div>
              <div className="col-12 col-xl-6">
                Microsoft Office Suite (Word, Excel, Power Point).
                <br />
                {language.skillsText3}
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    )
}
export default Skills;