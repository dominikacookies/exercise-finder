import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchExercises from "../../utils/fetchExercises";

import femaleBkg from "../../images/exercisesFemale.jpg";
import maleBkg from "../../images/exercisesMale.jpg";

import "./exercises.css";
import displayCards from "../../utils/displayCards";
import PageNavigation from "../../components/PageNavigation";

import Filters from "../../components/Filters";

const Exercises = () => {
  //identify if male/female images should be shown via params
  const { type } = useParams();
  //exercises fetched from the api
  const [exercises, setExercises] = useState();
  //exercises selected to display based on filters applied by user
  const [displayExercises, setDisplayExercises] = useState();
  //page of exercises the user is currently viewing
  const [page, setPage] = useState(1);

  //set background image for the page based on type of image chosen
  const backgroundImage = type === "female" ? femaleBkg : maleBkg;

  //fetch all exercises from the API
  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      const fetchedExercises = data.exercises;
      console.log(fetchedExercises);
      setExercises(fetchedExercises);
      setDisplayExercises(fetchedExercises);
    };

    getExercises();
  }, []);

  //identify the maximum page limit that exercises can be shown for
  let maxPageRoundedUp;
  if (displayExercises) {
    const maxPage = displayExercises.length / 16;
    maxPageRoundedUp = Math.floor(maxPage);
  }

  //logic for navigating to next and previous pages
  const onClickNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const onClickPreviousPage = () => {
    const nextPage = page - 1;
    setPage(nextPage);
  };

  return (
    <main style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1 className="header"> Build Your Workout </h1>
      {displayExercises ? (
        <>
          <div className="exercises-container">
            <Filters
              setPage={setPage}
              setDisplayExercises={setDisplayExercises}
              exercises={exercises}
            />
            {page === 1 && (
              <PageNavigation
                firstPage={true}
                onClickNextPage={onClickNextPage}
              />
            )}
            {page === maxPageRoundedUp && (
              <PageNavigation
                lastPage={true}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
            {page !== maxPageRoundedUp && page !== 1 && (
              <PageNavigation
                onClickNextPage={onClickNextPage}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}

            <div className="cards-container">
              {displayCards(displayExercises, type, page)}
            </div>
            {page === 1 && (
              <PageNavigation
                firstPage={true}
                onClickNextPage={onClickNextPage}
              />
            )}
            {page === maxPageRoundedUp && (
              <PageNavigation
                lastPage={true}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
            {page !== maxPageRoundedUp && page !== 1 && (
              <PageNavigation
                onClickNextPage={onClickNextPage}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
          </div>
        </>
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
