import React from "react";
import { FaClock, FaLocationArrow } from "react-icons/fa";

const Events = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between items-center md:mx-20">
        <div>
          <h2 className="text-3xl font-medium">Events</h2>
          <p className="font-medium">Upcoming Education Events to feed your brain.</p>
        </div>
        <button className="bg-[#002147] text-white py-[6px] px-[24px] hover:bg-yellow-400 hover:text-black">VIEW ALL</button>
      </div>
      <div className=" md:flex mx-auto justify-evenly  items-center gap-8 pt-10">
        <div className="text-center">
          <h1 className="text-3xl font-medium">30</h1>
          <p>September</p>
        </div>
        <div>
          <h2 className="text-xl font-medium">Autumn Science Lectures</h2>

          <div className="flex gap-5 py-3">
            <p className="flex justify-center items-center gap-2">
              <FaClock></FaClock> 08:00 - 17:00
            </p>
            <p className="flex justify-center items-center ap-2">
              <FaLocationArrow></FaLocationArrow> LONDON, UK
            </p>
          </div>
          <p>
            Morbi accumsan ipsum velit.<br /> Nam nec tellus a  odio tincidunt auctor a 
            ornare odio. 
          </p>
        </div>
        <div>
          <img
            className="w-[420px]"
            src="https://htmldemo.net/study/study/img/event/details.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" md:flex mx-auto justify-evenly  items-center gap-8 pt-10">
        <div className="text-center">
          <h1 className="text-3xl font-medium">12</h1>
          <p>December</p>
        </div>
        <div>
          <h2 className="text-xl font-medium">Autumn Science Lectures</h2>

          <div className="flex  gap-5 py-3">
            <p className="flex justify-center items-center gap-2">
              <FaClock></FaClock> 08:00 - 17:00
            </p>
            <p className="flex justify-center items-center ap-2">
              <FaLocationArrow></FaLocationArrow> LONDON, UK
            </p>
          </div>
          <p>
            Morbi accumsan ipsum velit. <br /> Nam nec tellus a  odio tincidunt auctor a 
            ornare odio. 
          </p>
        </div>
        <div>
          <img
            className="w-[420px]"
            src="	https://www.xtraspace.co.za/sites/default/files/bigstock-students-studying-in-college-l-158326556-optimised-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" md:flex mx-auto justify-evenly  items-center gap-8 pt-10">
        <div className="text-center">
          <h1 className="text-3xl font-medium">15</h1>
          <p>November</p>
        </div>
        <div>
          <h2 className="text-xl font-medium">Autumn Science Lectures</h2>

          <div className="flex gap-5 py-3">
            <p className="flex justify-center items-center gap-2">
              <FaClock></FaClock> 08:00 - 17:00
            </p>
            <p className="flex justify-center items-center ap-2">
              <FaLocationArrow></FaLocationArrow> LONDON, UK
            </p>
          </div>
          <p>
            Morbi accumsan ipsum velit. <br /> Nam nec  tellus a  odio tincidunt auctor a 
            ornare odio. 
          </p>
        </div>
        <div>
          <img
            className="w-[420px]"
            src="	https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/world-student-day1.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
