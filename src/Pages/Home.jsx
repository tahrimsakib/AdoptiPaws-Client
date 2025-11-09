import React from "react";
import Category from "../Component/Category";
import Slider from "../Component/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="max-w-10/12 mx-auto">
            <Category />
      </section>
    </div>
  );
};

export default Home;
