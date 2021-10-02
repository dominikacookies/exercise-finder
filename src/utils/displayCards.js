import Card from "../components/Card";

const displayCards = (exercises, type, page) => {
  console.log("this type", type);
  return exercises.map((exercise) => {
    console.log(type);
    const imageUrl =
      type === "female" ? exercise.female.image : exercise.male.image;

    const muscles = exercise.bodyAreas.join(" ");

    return (
      <Card
        imageUrl={imageUrl}
        name={exercise.name}
        muscles={muscles}
        id={exercise.id}
      />
    );
  });
};

export default displayCards;
