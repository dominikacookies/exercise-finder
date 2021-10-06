import { useHistory } from "react-router-dom";

import "./Home.css";
import Button from "../../components/Button";
import background from "../../images/hp-bkg.png";

const Home = () => {
  let history = useHistory();
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content-container eggshell-background">
        <h1 className="bold">Tomorrow begins today.</h1>
        <h2>Be a visionary, start your workout now.</h2>
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
