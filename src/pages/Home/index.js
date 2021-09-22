import Button from "../../components/Button";

const Home = () => {
  return (
    <main>
      <div>
        <h1>Tomorrow begins today.</h1>
        <h2>Start your workout now.</h2>
        <div>
          <Button label="Female" mode="primary" size="large" />
          <Button label="Male" mode="primary" size="large" />
        </div>
      </div>
    </main>
  );
};

export default Home;
