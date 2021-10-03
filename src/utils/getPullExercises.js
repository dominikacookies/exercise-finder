const getPullExercises = (exercises) => {
  return exercises.filter((exercise) => {
    const containsBack = exercise.bodyAreas.includes("Back");
    const containsBiceps = exercise.bodyAreas.includes("Biceps");
    if (containsBack || containsBiceps) {
      return true;
    }
  });
};

export default getPullExercises;
