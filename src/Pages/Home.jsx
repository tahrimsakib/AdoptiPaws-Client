import React from "react";
import Category from "../Component/Category";
import Slider from "../Component/Slider";
import MeetTeam from "../Component/MeetTeam";
import Healthcare from "../Component/Healthcare";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="max-w-10/12 mx-auto">
        <Category />
      </section>
      <section className="max-w-10/12 mx-auto">
        <MeetTeam />
      </section>
      <section className="">
        <Healthcare />
      </section>
    </div>
  );
};

export default Home;
