const getPushExercises = (exercises) => {
  return exercises.filter((exercise) => {
    const containsTriceps = exercise.bodyAreas.includes("Triceps");
    const containsChest = exercise.bodyAreas.includes("Chest");
    const containsShoulders = exercise.bodyAreas.includes("Shoulders");
    if (containsTriceps || containsChest || containsShoulders) {
      return true;
    }
  });
};

export default getPushExercises;
