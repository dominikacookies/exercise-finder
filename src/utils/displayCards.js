import Card from "../components/Card";

const displayCards = (exercises, type, page) => {
  // based on the current page being viewed determine where to slice the exercises array
  const displayExercisesFrom = page > 1 ? (page - 1) * 16 + (page - 1) : 0;
  const displayExercisesUpto = page > 1 ? page * 16 + (page - 1) : 16;

  // slice the exercises array to extract only the required exercises for the page being viewed
  return exercises
  .slice(displayExercisesFrom, displayExercisesUpto)
  .map((exercise, index) => {
      // for each exercise determine whether the male or female image should be shown
      const imageUrl =
        type === "female" ? exercise.female.image : exercise.male.image;

      // join the body areas array to display neatly on the card
      const muscles = exercise.bodyAreas.join(" | ");

      // for each exercise return a card component
      return (
        <Card
          id={exercise.id}
          key={`${exercise.id}-${index}`}
          imageUrl={imageUrl}
          name={exercise.name}
          muscles={muscles}
          description={exercise.transcript}
        />
      );
    });
};

export default displayCards;
