const getLegExercises = (exercises) => {
  return exercises.filter((exercise) => {
    const containsLegs = exercise.bodyAreas.includes("Legs");
    if (containsLegs) {
      return true;
    }
  });
};

export default getLegExercises;
