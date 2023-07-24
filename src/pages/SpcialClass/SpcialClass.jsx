import React from "react";
import { FaClipboardList, FaComment, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpcialClass = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <h2 className="text-3xl font-medium ">Spcial Class</h2>
        <p className="font-medium">There are many variations of passages</p>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10  md:px-20 mt-10 gap-8 md:gap-2">
        <div className="card rounded-none card-compact w-80 bg-base-400 shadow-2xl ">
          <figure>
            <img
              src="https://htmldemo.net/study/study/img/news/1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <Link className=" card-title font-normal text-xl hover:text-yellow-400">
              Learn English in ease
            </Link>
            <div className="flex justify-between ">
              <p className="flex items-center gap-2">
                <FaClipboardList></FaClipboardList> 25 jun 2050
              </p>
              <p className="flex items-center gap-2">
                <FaEye></FaEye>59
              </p>
              <p className="flex items-center gap-2">
                <FaComment></FaComment>19
              </p>
            </div>
            <p>
              There are many variaons of passages of Lorem Ipsuable, amrn in
              some by injected humour of passages of Lorem Ipsuable.
            </p>
            <div className="card-actions justify-start py-4">
              <Link className="font-normal text-sm hover:text-yellow-400">
                LEARN NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="card rounded-none card-compact w-80 bg-base-400 shadow-2xl ">
          <figure>
            <img
              src="https://htmldemo.net/study/study/img/news/2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <Link className=" card-title font-normal text-xl hover:text-yellow-400">
              Learn English in ease
            </Link>
            <div className="flex justify-between ">
              <p className="flex items-center gap-2">
                <FaClipboardList></FaClipboardList> 25 jun 2050
              </p>
              <p className="flex items-center gap-2">
                <FaEye></FaEye>59
              </p>
              <p className="flex items-center gap-2">
                <FaComment></FaComment>19
              </p>
            </div>
            <p>
              There are many variaons of passages of Lorem Ipsuable, amrn in
              some by injected humour of passages of Lorem Ipsuable.
            </p>
            <div className="card-actions justify-start py-4">
              <Link className="font-normal text-sm hover:text-yellow-400">
                LEARN NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="card rounded-none card-compact w-80 bg-base-400 shadow-2xl ">
          <figure>
            <img
              src="https://htmldemo.net/study/study/img/news/3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <Link className=" card-title font-normal text-xl hover:text-yellow-400">
              Learn English in ease
            </Link>
            <div className="flex justify-between ">
              <p className="flex items-center gap-2">
                <FaClipboardList></FaClipboardList> 25 jun 2050
              </p>
              <p className="flex items-center gap-2">
                <FaEye></FaEye>59
              </p>
              <p className="flex items-center gap-2">
                <FaComment></FaComment>19
              </p>
            </div>
            <p>
              There are many variaons of passages of Lorem Ipsuable, amrn in
              some by injected humour of passages of Lorem Ipsuable.
            </p>
            <div className="card-actions justify-start py-4">
              <Link className="font-normal text-sm hover:text-yellow-400">
                LEARN NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpcialClass;
