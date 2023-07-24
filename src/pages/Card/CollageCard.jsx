import React from "react";
import { Link } from "react-router-dom";

const CollageCard = ({ item }) => {
      console.log(item);
      // const  [picture, Collage_name, sports, admission_dates, events, research_History] = item ;

  return (
    <div className="card rounded-none card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="bg-cover"
          src={item.picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.Collage_name}</h2>
        <p>{item.research_History}</p>
        <p><span className="font-bold">Events : </span> {item.events}</p>
        <p><span className="font-bold">Admission_dates : </span> {item.admission_dates}</p>
        <p><span className="font-bold">Sports:</span> {item.sports}</p>

        <div className="card-actions justify-end">
        <Link to={`/details/${item._id}`} className="bg-[#002147] text-white py-[6px] px-[24px] hover:bg-yellow-400 hover:text-black">DETAILS</Link>
        </div>
      </div>
    </div>
  );
};

export default CollageCard;
