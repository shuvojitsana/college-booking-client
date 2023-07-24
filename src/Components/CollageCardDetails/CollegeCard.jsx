import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
      return (
            <div className="card rounded-none card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="bg-cover"
          src={college.picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college.Collage_name}</h2>
        <p>{college.research_History}</p>
        <p><span className="font-bold">Events : </span> {college.events}</p>
        <p><span className="font-bold">Admission_dates : </span> {college.admission_dates}</p>
        <p><span className="font-bold">Sports:</span> {college.sports}</p>

        <div className="card-actions justify-end">
        <Link to={`/details/${college._id}`} className="bg-[#002147] text-white py-[6px] px-[24px] hover:bg-yellow-400 hover:text-black">DETAILS</Link>
        </div>
      </div>
    </div>
      );
};

export default CollegeCard;