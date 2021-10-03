import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import fetchExercises from "../../utils/fetchExercises";
import displayCards from "../../utils/displayCards";

import "./Exercises.css";
import Filters from "../../components/Filters";
import PageNavigation from "../../components/PageNavigation";
import femaleBkg from "../../images/exercisesFemale.jpg";
import maleBkg from "../../images/exercisesMale.jpg";

const Exercises = () => {
  //identify if male/female images should be shown by reading params
  const { type } = useParams();
  //exercises fetched from the api
  const [exercises, setExercises] = useState();
  //exercises selected to display based on filters applied by user
  const [displayExercises, setDisplayExercises] = useState();
  //page of exercises the user is currently viewing
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  //background image for the page based on type of image chosen
  const backgroundImage = type === "female" ? femaleBkg : maleBkg;

  //fetch all exercises from the API
  useEffect(() => {
    try {
      const getExercises = async () => {
        const data = await fetchExercises();
        const fetchedExercises = data.exercises;
        setLoading(false);
        setError(false);
        setExercises(fetchedExercises);
        setDisplayExercises(fetchedExercises);
      };

      getExercises();
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  }, []);

  //identify the maximum page limit that exercises can be shown for
  let maxPageRoundedDown;
  if (displayExercises) {
    const maxPage = displayExercises.length / 16;
    maxPageRoundedDown = Math.round(maxPage);
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
      {!error && (
        <>
          <h1 className="header bold"> Build Your Workout </h1>
          <h2> Be all that you imagined you could be. Be a visionary.</h2>
        </>
      )}
      {displayExercises && (
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
            {page === maxPageRoundedDown && page !== 1 && (
              <PageNavigation
                lastPage={true}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
            {page !== maxPageRoundedDown && page !== 1 && (
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
            {page === maxPageRoundedDown && page !== 1 && (
              <PageNavigation
                lastPage={true}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
            {page !== maxPageRoundedDown && page !== 1 && (
              <PageNavigation
                onClickNextPage={onClickNextPage}
                onClickPreviousPage={onClickPreviousPage}
              />
            )}
          </div>
        </>
      )}
      {loading && <Spinner animation="border" variant="info" />}
      {error && (
        <div>
          <h3> Sorry, we couldn't find any exercises at this time.</h3>
          <p> Please try again later </p>
        </div>
      )}
    </main>
  );
};

export default Exercises;
