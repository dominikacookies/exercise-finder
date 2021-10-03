import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "./Card.css";

const Card = ({ imageUrl, name, muscles, id, description }) => {
  const [show, setShow] = useState(false);
  const [html] = useState({ __html: description });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="card-container" key={id} onClick={handleShow}>
        <div
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
          className="card-image"
        >
          <div className="card-preview-info">
            <h3 className="text-limit-one-line white-text bold"> {name} </h3>
            <p className="exercise-muscle-text text-limit-one-line white-text">
              {muscles}
            </p>
          </div>
        </div>
      </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
          className="offcanvas-card-image"
        >
          <h2 className="bold eggshell-background">{name}</h2>
          <img src={imageUrl} className="exercise-preview-image"></img>
          <div className="eggshell-background">
            <h3>Let's get started!</h3>
            <div dangerouslySetInnerHTML={html}></div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Card;
