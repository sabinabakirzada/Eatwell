import React from "react";
import Gallery from "./gallery";
import Newss from "./newss";
import Story from "./story";
import Welcome from "./welcome";
import Offer from "../offer";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Offer />
      <Story />
      <Newss />
      <Gallery />
    </div>
  );
};

export default Home;
