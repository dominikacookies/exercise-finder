import { useParams } from "react-router-dom";

const Exercises = () => {
  const { type } = useParams();
  console.log(type);
  return <h1>{type}</h1>;
};

export default Exercises;
