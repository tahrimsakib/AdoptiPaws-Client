import React from "react";

const Healthcare = () => {
  return (
    <section className="py-20 dark:from-gray-900 dark:to-gray-950">
      <div className="flex flex-col md:flex-row items-center gap-17 max-w-11/12 ml-0 mr-auto">
        <div className="w-full md:w-2/3 relative">
          <img
            src="https://images.pexels.com/photos/16196272/pexels-photo-16196272.jpeg"
            alt="Pet Healthcare"
            className="w-full h-full object-cover shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#ff6d2d] rounded-full blur-3xl opacity-40"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-6 pr-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
            <span className="border-b-4 border-[#ff6d2d] pb-1">Pet</span> Health
            Care
          </h2>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed font2">
            Healthy pets, happy homes! From routine checkups to preventive
            wellness and expert care,{" "}
            <span className="text-[#ff6d2d] font-semibold">AdoptiPaws</span>{" "}
            ensures every furry friend thrives with vitality and joy.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-400 shadow-md rounded-2xl p-6 hover:shadow-lg hover:border-[#ff6d2d] hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-[#ff6d2d] mb-2">
                🩺 Preventive Care
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font2">
                Routine checkups and vaccinations to keep pets healthy and
                happy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-400 shadow-md rounded-2xl p-6 hover:shadow-lg hover:border-[#ff6d2d] hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-[#ff6d2d] mb-2">
                🍽️ Optimal Nutrition
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font2">
                Balanced diets and supplements to fuel growth, energy, and
                well-being.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-400 shadow-md rounded-2xl p-6 hover:shadow-lg hover:border-[#ff6d2d] hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-[#ff6d2d] mb-2">
                🧴 Grooming & Hygiene
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font2">
                Professional grooming and hygiene care to keep pets clean and
                comfortable.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-400 shadow-md rounded-2xl p-6 hover:shadow-lg hover:border-[#ff6d2d] hover:scale-105 transition-transform duration-300">
              <h4 className="text-lg md:text-xl font-semibold text-[#ff6d2d] mb-2">
                🏃‍♂️ Exercise & Enrichment
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base font2">
                Playtime and mental stimulation for active, happy, and healthy
                pets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Healthcare;
