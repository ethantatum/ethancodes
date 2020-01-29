import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container mt-5">
        <div className="row pt-5">
          <div className="col-6">
            <h1 className="p-3 text-white">
              Committed to using full-stack application skills to help your
              business on the road of innovation
            </h1>
          </div>
          <div className="col-6 d-flex flex-column">
            <div className="row justify-content-center">
              <button className="button rounded p-3 m-1">
                <h1>About Me</h1>
              </button>
            </div>
            <div className="row justify-content-center">
              <button className="button rounded p-3 m-1">
                <h1>Portfolio</h1>
              </button>
            </div>
            <div className="row justify-content-center">
              <button className="button rounded p-3 m-1">
                <h1>Contact</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
