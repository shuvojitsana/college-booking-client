import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/s5SxXsj/img1.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h3 className="mb-5 text-2xl font-bold">Welcome To Study</h3>
          <h1 className="mb-5 text-5xl font-bold">
            The Best Learning Institution
          </h1>
          <p className="pb-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. 
          </p>
          <button className="bg-[#002147] text-white py-[6px] px-[24px] hover:bg-yellow-400 hover:text-black">GET LEARNING</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
