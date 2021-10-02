import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import fetchExercises from "../../utils/fetchExercises";

import femaleBkg from "../../images/exercisesFemale.jpg";
import maleBkg from "../../images/exercisesMale.jpg";

import "./exercises.css";
import displayCards from "../../utils/displayCards";
import PageNavigation from "../../components/PageNavigation";

const Exercises = () => {
  const { type } = useParams();
  const [exercises, setExercises] = useState();
  const [page, setPage] = useState(1);

  const backgroundImage = type === "female" ? femaleBkg : maleBkg;

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercises();
      const fetchedExercises = data.exercises;
      setExercises(fetchedExercises);
    };

    getExercises();
  }, []);

  let maxPageRoundedUp;
  if (exercises) {
    const maxPage = exercises.length / 16;
    maxPageRoundedUp = Math.floor(maxPage);
    console.log(maxPageRoundedUp);
  }
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
      <h1 className="black-text"> Exercises </h1>
      {exercises ? (
        <>
          <div className="exercises-container">
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
              {displayCards(exercises, type, page)}
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
