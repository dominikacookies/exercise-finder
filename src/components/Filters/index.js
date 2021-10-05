import { useState } from "react";

import "./Filters.css";
import Button from "../Button";
import getPushExercises from "../../utils/filterExercises/getPushExercises";
import getPullExercises from "../../utils/filterExercises/getPullExercises";
import getLegExercises from "../../utils/filterExercises/getLegExercises";

const Filters = ({ setPage, setDisplayExercises, exercises }) => {
  //filters as chosen by the user
  const [filter, setFilter] = useState("all");

  //identify button state by checking if corresponding filter has been applied
  const allFilterButtonMode = filter === "all" ? "inactive" : "primary";
  const pushFilterButtonMode = filter === "push" ? "inactive" : "primary";
  const pullFilterButtonMode = filter === "pull" ? "inactive" : "primary";
  const legsFilterButtonMode = filter === "legs" ? "inactive" : "primary";

  //logic for displaying exercises according to user selected filters
  const displayAllExercises = () => {
    setFilter("all");
    setPage(1);
    setDisplayExercises(exercises);
  };

  const displayPushExercises = () => {
    const pushExercises = getPushExercises(exercises);
    setFilter("push");
    setPage(1);
    setDisplayExercises(pushExercises);
  };

  const displayPullExercises = () => {
    const pullExercises = getPullExercises(exercises);
    setFilter("pull");
    setPage(1);
    setDisplayExercises(pullExercises);
  };

  const displayLegExercises = () => {
    const legExercises = getLegExercises(exercises);
    setFilter("legs");
    setPage(1);
    setDisplayExercises(legExercises);
  };

  return (
    <div className="filters-container">
      <Button
        label="ALL"
        mode={allFilterButtonMode}
        size="small"
        onClick={displayAllExercises}
        id="all-filter-button"
      />
      <Button
        label="PUSH"
        mode={pushFilterButtonMode}
        size="small"
        onClick={displayPushExercises}
        id="push-filter-button"
      />
      <Button
        label="PULL"
        mode={pullFilterButtonMode}
        size="small"
        onClick={displayPullExercises}
        id="pull-filter-button"
      />
      <Button
        label="LEGS"
        mode={legsFilterButtonMode}
        size="small"
        onClick={displayLegExercises}
        id="legs-filter-button"
      />
    </div>
  );
};
export default Filters;
