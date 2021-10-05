import getPullExercises from "./getPullExercises";
import getPushExercises from "./getPushExercises";
import getLegExercises from "./getLegExercises";

const mockExercises = [
  {
    id: 123,
    bodyAreas: ["Legs"],
  },
  {
    id: 456,
    bodyAreas: ["Legs", "Biceps"],
  },
  {
    id: 789,
    bodyAreas: ["Biceps", "Chest"],
  },
  {
    id: 101,
    bodyAreas: ["Triceps", "Back"],
  },
];

const pushExercisesTestResult = [
  {
    id: 789,
    bodyAreas: ["Biceps", "Chest"],
  },
  {
    id: 101,
    bodyAreas: ["Triceps", "Back"],
  },
];

const pullExercisesTestResult = [
  {
    id: 456,
    bodyAreas: ["Legs", "Biceps"],
  },
  {
    id: 789,
    bodyAreas: ["Biceps", "Chest"],
  },
  {
    id: 101,
    bodyAreas: ["Triceps", "Back"],
  },
];

const legExercisesTestResult = [
  {
    id: 123,
    bodyAreas: ["Legs"],
  },
  {
    id: 456,
    bodyAreas: ["Legs", "Biceps"],
  },
];

test("getPullExercises", () => {
  expect(getPullExercises(mockExercises)).toStrictEqual(
    pullExercisesTestResult
  );
});

test("getPushExercises", () => {
  expect(getPushExercises(mockExercises)).toStrictEqual(
    pushExercisesTestResult
  );
});

test("getLegExercises", () => {
  expect(getLegExercises(mockExercises)).toStrictEqual(legExercisesTestResult);
});
