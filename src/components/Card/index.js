import "./Card.css";

const Card = ({ imageUrl, name, muscles, id }) => {
  return (
    <div
      style={{ backgroundImage: "url(" + imageUrl + ")" }}
      className="card-image"
    >
      <div className="card-container">
        <div className="card-preview-info">
          <h4> {name} </h4>
          <p> {muscles} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
