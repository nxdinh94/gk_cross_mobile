import React from "react";
import TemperatureConverter from "../covertTemp";
import classes from "./Home.module.css";
const Home = () => {
  return (
    <div className={classes.container}>
      <div>
        <TemperatureConverter />
      </div>
    </div>
  );
};

export default Home;
