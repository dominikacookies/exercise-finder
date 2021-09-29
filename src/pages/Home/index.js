import Button from "../../components/Button";
import "./home.css";
import background from "../../images/hp-bkg.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  let history = useHistory();
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content-container">
        <h1>Tomorrow begins today.</h1>
        <h2>Start your workout now.</h2>
        <div className="home-buttons-container">
          <Button
            label="FEMALE"
            mode="primary"
            size="large"
            onClick={() => history.push("/exercises/female")}
          />
          <Button
            label="MALE"
            mode="primary"
            size="large"
            onClick={() => history.push("/exercises/male")}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
