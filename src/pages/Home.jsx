const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center flex-column">
      <div className="container m-auto col-9 homeContainer">
        {/* <h3 className="text-danger mt-5 h-6">Hi My name is</h3> */}
        <h2 className="text-light fullName">Mehmet Çakır</h2>
        <h2 className="text-light frondEnd">I'm a Front-End Developer</h2>
        <h5 className="text-light desc">
          I’m a Frond-End Developer specializing in building exceptional digital
          experiences. Currently, I’m focused on building responsive
          web applications.
        </h5>
        <div className="d-flex justify-content-between">
             <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
        </div>
        <img src="images/wave.svg" alt="wave"className="wave" />
      </div>

  );
};

export default Home;
