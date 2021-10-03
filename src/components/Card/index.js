import "./Card.css";

const Card = ({ imageUrl, name, muscles, id, exerciseInstructions }) => {
  return (
    <>
      <div className="card-container" key={id}>
        <div
          style={{ backgroundImage: "url(" + imageUrl + ")" }}
          className="card-image"
        >
          <div className="card-preview-info">
            <h3 className="text-limit-one-line"> {name} </h3>
            <p className="exercise-muscle-text text-limit-one-line">
              {muscles}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
