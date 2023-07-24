import React from "react";
import { Link } from "react-router-dom";

const Another = () => {
  return (
    <div className=" md:flex gap-8 justify-center items-center mt-16 mb-16 w-10/12 mx-auto">
      <div>
        <figure >
          <img className="w-[1880px]"
            src="https://img.freepik.com/premium-photo/people-are-students-they-study-together_85574-14556.jpg?w=900"
            alt="study"
          />
        </figure>
      </div>
      <div>
        <h2 className="font-normal text-2xl">About Study</h2>
        <p className="py-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there is not anything embarrassing hidden in the middle 
        </p>
        <div className=" justify-start">
          <Link className=" bg-[#002147] text-white py-[6px] px-[24px] hover:bg-yellow-400 hover:text-black ">LEARN NOW</Link>
        </div>
      </div>
    </div>
  );
};

export default Another;
