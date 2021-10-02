import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchExercises from "../../utils/fetchExercises";

import femaleBkg from "../../images/exercisesFemale.jpg";
import maleBkg from "../../images/exercisesMale.jpg";

import "./exercises.css";
import displayCards from "../../utils/displayCards";
import PageNavigation from "../../components/PageNavigation";
import getPushExercises from "../../utils/getPushExercises";

const Exercises = () => {
  const { type } = useParams();
  const [exercises, setExercises] = useState();
  const [displayExercises, setDisplayExercises] = useState();
  const [page, setPage] = useState(1);

  const backgroundImage = type === "female" ? femaleBkg : maleBkg;

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      const fetchedExercises = data.exercises;
      setExercises(fetchedExercises);
      setDisplayExercises(fetchedExercises);
    };

    getExercises();
  }, []);

  let maxPageRoundedUp;
  if (displayExercises) {
    const maxPage = displayExercises.length / 16;
    maxPageRoundedUp = Math.floor(maxPage);
  }

  const displayPushExercises = () => {
    const pushExercises = getPushExercises(exercises);
    setPage(1);
    setDisplayExercises(pushExercises);
  };

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
      <h1 className="black-text header"> Build Your Workout </h1>
      {displayExercises ? (
        <>
          <div className="exercises-container">
            <div>
              <button onClick={displayPushExercises}>PUSH</button>
              <button>PULL</button>
              <button>LEGS</button>
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
