import axios from "axios";

const fetchExercises = async () => {
  try {
    const { data } = await axios.get(
      "https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/"
    );

    return data;
  } catch (error) {
    return { error: "Failed to fetch data." };
  }
};

export default fetchExercises;
