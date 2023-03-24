import { useApp } from "../../context/AppContext";
import { useState, useEffect } from "react";
import { Button, Modal, Accordion } from "react-bootstrap";
import col1 from "../../assets/proyectos/col/col1.jpg";
import col2 from "../../assets/proyectos/col/col2.jpg";
import col3 from "../../assets/proyectos/col/col3.jpg";
import col4 from "../../assets/proyectos/col/col4.jpg";
import col5 from "../../assets/proyectos/col/col5.jpg";
import pets1 from "../../assets/proyectos/pets/pet1.jpg";
import pets2 from "../../assets/proyectos/pets/pet2.jpg";
import pets3 from "../../assets/proyectos/pets/pet3.jpg";
import pets4 from "../../assets/proyectos/pets/pet4.jpg";
import pets5 from "../../assets/proyectos/pets/pet5.jpg";
import exp1 from "../../assets/proyectos/expert/exp1.jpg";
import exp2 from "../../assets/proyectos/expert/exp2.jpg";
import exp3 from "../../assets/proyectos/expert/exp3.jpg";
import exp4 from "../../assets/proyectos/expert/exp4.jpg";
import exp5 from "../../assets/proyectos/expert/exp5.jpg";
import hector1 from "../../assets/proyectos/hector/h1.jpg";
import hector2 from "../../assets/proyectos/hector/h2.jpg";
import hector3 from "../../assets/proyectos/hector/h3.jpg";
import hector4 from "../../assets/proyectos/hector/h4.jpg";
function Proyectos() {
  const { color, language, activarModal, desactivarModal } = useApp();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const fotosCol = [col1, col2, col3, col4, col5];
  const fotosPets = [pets1, pets2, pets3, pets4, pets5];
  const fotosExp = [exp1, exp2, exp3, exp4, exp5];
  const fotosHector = [hector1, hector2, hector3, hector4];
  const handleShow1 = () => {
    setShow1(true);
    activarModal();
  };
  const handleClose1 = () => {
    setShow1(false);
    desactivarModal();
  };
  const handleShow2 = () => {
    setShow2(true);
    activarModal();
  };
  const handleClose2 = () => {
    setShow2(false);
    desactivarModal();
  };
  const handleShow3 = () => {
    setShow3(true);
    activarModal();
  };
  const handleClose3 = () => {
    setShow3(false);
    desactivarModal();
  };
  const handleShow4 = () => {
    setShow4(true);
    activarModal();
  };
  const handleClose4 = () => {
    setShow4(false);
    desactivarModal();
  };
  const FotosView = (data) => {
    const [selected, setSelected] = useState(0);
    const [sel, setSel] = useState(true);
    useEffect(() => {
      const setMas = () =>{
        if (sel){
          if (selected === data.data.length - 1) {
            setSelected(0);
          } else {
            setSelected(selected + 1);
          }
        } else{
          setSel(true)
        }
      }
      const intervalId = setInterval(() => {
        setMas()
      }, 5000);
      return () => clearInterval(intervalId);
    }, [sel, selected, data]);
    return (
      <div className="d-flex flex-column justify-content-center pe-md-0 ps-md-0 ps-lg-5 pe-lg-5">
        <img
          className="d-block rounded foto-modal"
          src={data.data[selected]}
          alt={selected}
        />
        <div className="d-flex flex-row justify-content-center m-2">
          {data.data.map((img, i) => {
            let clas = ""
            if (i === selected){
              clas="selectedButton"
            }
            return (
              <button
                className={`btn btn-ligth mt-1 ms-1 me-1 ms-md-2 me-md-2 ms-lg-3 me-lg-3 p-0 ${clas}`}
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setSel(false)
                  setSelected(i);
                }}
              >
                <img
                  className="d-block rounded img-btn-modal"
                  src={img}
                  alt={i}
                />
              </button>
            );
          })}
        </div>
      </div>
    );
  };
  const Modal1 = () => {
    return (
      <>
        <Modal
          show={show1}
          onHide={handleClose1}
          size="xl"
          className="modal-proyectos"
        >
          <Modal.Header
            closeButton
            closeVariant={color.closeVariant}
            style={{
              backgroundColor: color.modalTitle1,
              borderBottom: `2px solid ${color.modalBorder}`,
            }}
          >
            <Modal.Title className="fs-4" style={{ color: color.modalTitle }}>
              Colombia Emprende
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: color.backgroundModal }}
            className="text-center"
          >
            <img src={color.logoCol} alt="" className="logo-img"></img>
            <div
              className="text-start text-md-center modal-links"
              style={{
                color: color.titleView,
              }}
            >
              <div>{language.projectTitles.a}</div>

              <div>
                <a
                  className=""
                  role="button"
                  href="https://colombia-emprende.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://colombia-emprende.vercel.app/
                </a>
              </div>
              <div>{language.projectTitles.b}</div>
              <div>
                <span className="d-none d-md-inline">Frontend: </span>
                <span className="d-block d-md-none">Frontend: </span>
                <a
                  className=""
                  role="button"
                  href="https://github.com/HectorBetan/Colombia-Emprende"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://github.com/HectorBetan/Colombia-Emprende
                </a>
              </div>

              <div>
                <span className="d-none d-md-inline">Backend: </span>
                <span className="d-block d-md-none">Backend: </span>
                <a
                  className=""
                  role="button"
                  href="https://github.com/HectorBetan/Colombia-Emprende-Server"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://github.com/HectorBetan/Colombia-Emprende-Server
                </a>
              </div>
            </div>
            <div>
              <Accordion
                className="text-start"
                defaultActiveKey={["0", "1"]}
                alwaysOpen
                flush
              >
                <Accordion.Item
                  eventKey="0"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.c}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.colEmp.info}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.d}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    <FotosView data={fotosCol}></FotosView>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.e}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.colEmp.func}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.f}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.colEmp.tech}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="4"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.g}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.colEmp.fin}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: color.modalTitle1,
              borderTop: `2px solid ${color.modalBorder}`,
            }}
            className="justify-content-center"
          >
            <Button
              style={{
                backgroundColor: color.buttonModal,
                color: color.buttonTitleModal,
              }}
              size="md"
              onClick={handleClose1}
            >
              {language.projectTitles.close}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  const Modal2 = () => {
    return (
      <>
        <Modal
          show={show2}
          onHide={handleClose2}
          size="xl"
          className="modal-proyectos"
        >
          <Modal.Header
            closeButton
            closeVariant={color.closeVariant}
            style={{
              backgroundColor: color.modalTitle1,
              borderBottom: `2px solid ${color.modalBorder}`,
            }}
          >
            <Modal.Title className="fs-4" style={{ color: color.modalTitle }}>
              Pets <span className="fw-bold fuenteModal">&</span> Pets{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: color.backgroundModal }}
            className="text-center"
          >
            <img src={color.logoPets} alt="" className="logo-img"></img>
            <div
              className="text-start text-md-center modal-links"
              style={{
                color: color.titleView,
              }}
            >
              <div>{language.projectTitles.a}</div>

              <div>
                <a
                  className=""
                  role="button"
                  href="https://petsandpetsaxm.web.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://petsandpetsaxm.web.app/
                </a>
              </div>
              <div>{language.projectTitles.b}</div>
              <div>
                <a
                  className=""
                  role="button"
                  href="https://github.com/HectorBetan/pets-and-pets"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://github.com/HectorBetan/pets-and-pets
                </a>
              </div>
            </div>
            <div>
              <Accordion
                className="text-start"
                defaultActiveKey={["0", "1"]}
                alwaysOpen
                flush
              >
                <Accordion.Item
                  eventKey="0"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.c}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.pets.info}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.d}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    <FotosView data={fotosPets}></FotosView>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.f}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.pets.tech}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: color.modalTitle1,
              borderTop: `2px solid ${color.modalBorder}`,
            }}
            className="justify-content-center"
          >
            <Button
              style={{
                backgroundColor: color.buttonModal,
                color: color.buttonTitleModal,
              }}
              size="md"
              onClick={handleClose2}
            >
              {language.projectTitles.close}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  const Modal4 = () => {
    return (
      <>
        <Modal
          show={show4}
          onHide={handleClose4}
          size="xl"
          className="modal-proyectos"
        >
          <Modal.Header
            closeButton
            closeVariant={color.closeVariant}
            style={{
              backgroundColor: color.modalTitle1,
              borderBottom: `2px solid ${color.modalBorder}`,
            }}
          >
            <Modal.Title className="fs-4" style={{ color: color.modalTitle }}>
              Portafolio Hector Betancourt
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: color.backgroundModal }}
            className="text-center"
          >
            <img src={color.logoHector} alt="" className="logo-img"></img>
            <div
              className="text-start text-md-center modal-links"
              style={{
                color: color.titleView,
              }}
            >
              <div>{language.projectTitles.a}</div>

              <div>
                <a
                  className=""
                  role="button"
                  href="https://hectorbetan.github.io/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://hectorbetan.github.io/
                </a>
              </div>
              <div>{language.projectTitles.b}</div>
              <div>
                <a
                  className=""
                  role="button"
                  href="https://github.com/HectorBetan/Hector-Betan-Page"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://github.com/HectorBetan/Hector-Betan-Page
                </a>
              </div>
            </div>
            <div>
              <Accordion
                className="text-start"
                defaultActiveKey={["0", "1"]}
                alwaysOpen
                flush
              >
                <Accordion.Item
                  eventKey="0"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.c}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.hector.info}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.d}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    <FotosView data={fotosHector}></FotosView>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.e}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.hector.func}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="3"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.f}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.hector.tech}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: color.modalTitle1,
              borderTop: `2px solid ${color.modalBorder}`,
            }}
            className="justify-content-center"
          >
            <Button
              style={{
                backgroundColor: color.buttonModal,
                color: color.buttonTitleModal,
              }}
              size="md"
              onClick={handleClose4}
            >
              {language.projectTitles.close}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  const Modal3 = () => {
    return (
      <>
        <Modal
          show={show3}
          onHide={handleClose3}
          size="xl"
          className="modal-proyectos"
        >
          <Modal.Header
            closeButton
            closeVariant={color.closeVariant}
            style={{
              backgroundColor: color.modalTitle1,
              borderBottom: `2px solid ${color.modalBorder}`,
            }}
          >
            <Modal.Title className="fs-4" style={{ color: color.modalTitle }}>
              Expert App
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{ backgroundColor: color.backgroundModal }}
            className="text-center"
          >
            <img src={color.logoExp} alt="" className="logo-img"></img>
            <div
              className="text-start text-md-center modal-links"
              style={{
                color: color.titleView,
              }}
            >

              <div>{language.projectTitles.b}</div>
              <div>
                <a
                  className=""
                  role="button"
                  href="https://github.com/HectorBetan/ExpertApp"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: color.linksView }}
                >
                  https://github.com/HectorBetan/ExpertApp
                </a>
              </div>
            </div>
            <div>
              <Accordion
                className="text-start"
                defaultActiveKey={["0", "1"]}
                alwaysOpen
                flush
              >
                <Accordion.Item
                  eventKey="0"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.c}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.expert.info}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="1"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.d}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    <FotosView data={fotosExp}></FotosView>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item
                  eventKey="2"
                  style={{ backgroundColor: color.accButton }}
                >
                  <Accordion.Header>
                    <span className="fs-3" style={{ color: color.accsubt }}>
                    {language.projectTitles.f}
                    </span>
                  </Accordion.Header>
                  <Accordion.Body
                    style={{
                      backgroundColor: color.backgroundAcc,
                      color: color.text1,
                    }}
                  >
                    {language.expert.tech}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: color.modalTitle1,
              borderTop: `2px solid ${color.modalBorder}`,
            }}
            className="justify-content-center"
          >
            <Button
              style={{
                backgroundColor: color.buttonModal,
                color: color.buttonTitleModal,
              }}
              size="md"
              onClick={handleClose3}
            >
              {language.projectTitles.close}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  return (
    <section className="resume-section" id="educacion">
      <Modal1 />
      <Modal2 />
      <Modal3 />
      <Modal4 />
      <div className="resume-section-content">
        <h2
          className=" mb-4  mb-md-5 text-center text-md-start"
          style={{ color: color.menu }}
        >
          {language.proyTitle}
        </h2>
        <div className="d-flex flex-column flex-lg-row justify-content-start mb-4 mb-lg-5">
          <div className="flex-grow-1">
            <h3 className="mb-0" style={{ color: color.title1 }}>
              Colombia Emprende
            </h3>
            <div className="project-desc">
            {language.projects.col}
            </div>
          </div>
          <div className="flex-shrink-0 ms-lg-5 me-lg-2 me-xl-4 me-xxl-5">
            <button
              className="mt-2"
              style={{
                color: color.buttonTitle,
                backgroundColor: color.button,
              }}
              onClick={handleShow1}
            >
              {language.verInfo}
            </button>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-start mb-4 mb-lg-5">
          <div className="flex-grow-1">
            <h3 className="mb-0" style={{ color: color.title1 }}>
              Pets <span className="fw-bold fuente">&</span> Pets
            </h3>
            <div className="project-desc">{language.projects.pets}</div>
          </div>
          <div className="flex-shrink-0 ms-lg-5 me-lg-2 me-xl-4 me-xxl-5">
            <button
              className="mt-2"
              style={{
                color: color.buttonTitle,
                backgroundColor: color.button,
              }}
              onClick={handleShow2}
            >
              {language.verInfo}
            </button>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-start mb-4 mb-lg-5">
          <div className="flex-grow-1">
            <h3 className="mb-0" style={{ color: color.title1 }}>
              Expert App
            </h3>
            <div className="project-desc">
            {language.projects.exp}
            </div>
          </div>
          <div className="flex-shrink-0 ms-lg-5 me-lg-2 me-xl-4 me-xxl-5">
            <button
              className="mt-2"
              style={{
                color: color.buttonTitle,
                backgroundColor: color.button,
              }}
              onClick={handleShow3}
            >
              {language.verInfo}
            </button>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row justify-content-start mb-4 mb-lg-5">
          <div className="flex-grow-1">
            <h3 className="mb-0" style={{ color: color.title1 }}>
              Portafolio Hector Betancourt
            </h3>
            <div className="project-desc">
            {language.projects.hector}
            </div>
          </div>
          <div className="flex-shrink-0 ms-lg-5 me-lg-2 me-xl-4 me-xxl-5">
            <button
              className="mt-2"
              style={{
                color: color.buttonTitle,
                backgroundColor: color.button,
              }}
              onClick={handleShow4}
            >
              {language.verInfo}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Proyectos;
