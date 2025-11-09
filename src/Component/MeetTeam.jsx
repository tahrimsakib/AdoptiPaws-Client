import React from "react";

const MeetTeam = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-15">
        <span className="border-b-4 border-[#ff6d2d] pb-1">Mee</span>t Groomers.

      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 hover:border-1 border-[#ff6d2d]">
          <img
            src="https://images.pexels.com/photos/29497239/pexels-photo-29497239.jpeg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-12">
            Emma Johnson
          </h3>
          <p className="text-[#ff6d2d] font-medium font2">
            Pet Healthcare Specialist
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 hover:border-1 border-[#ff6d2d]">
          <img
            src="https://images.pexels.com/photos/13081121/pexels-photo-13081121.jpeg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-12">
            Liam Carter
          </h3>
          <p className="text-[#ff6d2d] font-medium font2">Animal Trainer</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 hover:border-1 border-[#ff6d2d]">
          <img
            src="https://images.pexels.com/photos/6568493/pexels-photo-6568493.jpeg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-12">
            Sophia Lee
          </h3>
          <p className="text-[#ff6d2d] font-medium font2">Adoption Consultant</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300 hover:border-1 border-[#ff6d2d]">
          <img
            src="https://images.pexels.com/photos/5749792/pexels-photo-5749792.jpeg"
            alt="Team Member"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-12">
            Zen Chung
          </h3>
          <p className="text-[#ff6d2d] font-medium font2">Pet Nutrition Expert</p>
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
