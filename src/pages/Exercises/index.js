import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchExercises from "../../utils/fetchExercises";

import femaleBkg from "../../images/exercisesFemale.jpg";
import maleBkg from "../../images/exercisesMale.jpg";

import "./exercises.css";
import displayCards from "../../utils/displayCards";

const Exercises = () => {
  const { type } = useParams();
  const [exercises, setExercises] = useState();

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      const fetchedExercises = data.exercises;
      setExercises(fetchedExercises);

      console.log(fetchedExercises);
    };

    getExercises();
  }, []);
  return (
    <main style={{ backgroundImage: `url(${femaleBkg})` }}>
      <h1> Exercises </h1>
      {exercises ? (
        <div className="cards-container">{displayCards(exercises, type)}</div>
      ) : (
        <div>
          <h3> Sorry, we couldn't find any exercises at this time.</h3>
          <p> Please try again later </p>
        </div>
      )}
    </main>
  );
};

export default Exercises;
