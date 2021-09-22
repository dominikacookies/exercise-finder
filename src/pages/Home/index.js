import Button from "../../components/Button";
import "./home.css";
import background from "../../images/hp-bkg.png";

const Home = () => {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      <div className="home-content-container">
        <h1>Tomorrow begins today.</h1>
        <h2>Start your workout now.</h2>
        <div className="home-buttons-container">
          <Button label="Female" mode="primary" size="large" />
          <Button label="Male" mode="primary" size="large" />
        </div>
      </div>
    </main>
  );
};

export default Home;
