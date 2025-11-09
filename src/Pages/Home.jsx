import React from "react";
import Category from "../Component/Category";
import Slider from "../Component/Slider";
import MeetTeam from "../Component/MeetTeam";
import Healthcare from "../Component/Healthcare";
import { useLoaderData } from "react-router";
import Recent6 from "../Component/Recent6";

const Home = () => {
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <Slider />
      <section className="max-w-10/12 mx-auto">
        <Category />
      </section>
      <section className="max-w-10/12 mx-auto">
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-15 text-gray-900 dark:text-white">
        <span className="border-b-4 border-[#ff6d2d] pb-1">Rec</span>ent
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item) => (
          <Recent6 item={item} />
        ))}
      </div>
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
