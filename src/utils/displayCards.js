import Card from "../components/Card";

const displayCards = (exercises, type, page) => {
  const displayExercisesFrom = page > 1 ? (page - 1) * 16 + (page - 1) : 0;
  const displayExercisesUpto = page > 1 ? page * 16 + (page - 1) : 16;

  return exercises
    .slice(displayExercisesFrom, displayExercisesUpto)
    .map((exercise, index) => {
      const imageUrl =
        type === "female" ? exercise.female.image : exercise.male.image;

      const muscles = exercise.bodyAreas.join(" | ");

      return (
        <Card
          imageUrl={imageUrl}
          name={exercise.name}
          muscles={muscles}
          id={exercise.id}
          key={`${exercise.id}-${index}`}
        />
      );
    });
};

export default displayCards;
