import React from "react";
import { useLoaderData } from "react-router-dom";
import CollegeCard from "./CollegeCard";

const CollageDetails = () => {
      const colleges = useLoaderData();
      console.log(colleges);
  return (
      <div>
            there are many colleges : {colleges.length}

            {
                colleges.map(college => <CollegeCard
                  key={college._id}
                  college={college}
                ></CollegeCard>)  
            }
      </div>
//     <div>
//       <div
//         className="hero min-h-[340px]"
//         style={{
//           backgroundImage:
//             "url(https://images.shiksha.ws/mediadata/images/articles/iStock_000007372117_Medium.jpg)",
//         }}
//       >
//         <div className="hero-overlay bg-opacity-60"></div>
//         <div className="hero-content text-center text-neutral-content">
//           <div className="max-w-md">
//             <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
//           </div>
//         </div>
//       </div>

//       <div className="my-12 px-[120px]">
//         <img
//           src="https://images.shiksha.ws/mediadata/images/articles/iStock_000007372117_Medium.jpg"
//           alt=""
//         />
//         <div>
//           <h2 className="text-4xl font-medium my-5">Grimes Sweet</h2>
//           <div className="flex gap-5 py-3">
//             <p className="flex justify-center items-center gap-2">
//               Admission_Dates : November 15 - Descember 15
//             </p>
//             <p className="flex justify-center items-center ap-2">
//               sports: Cricket
//             </p>
//           </div>
//           <p className="py-3">Events : ReferenceError: place is not defined</p>

//           <p>
//             Minim nisi minim culpa pariatur enim do voluptate cupidatat
//             pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Ea atque placeat nobis dolores. Quaerat minima soluta adipisci,
//             velit, fuga maiores reprehenderit molestiae repudiandae nostrum et
//             temporibus animi, voluptatum cumque quasi. Lorem, ipsum dolor sit
//             amet consectetur adipisicing elit. Commodi quia doloremque, quo
//             perspiciatis deserunt voluptas eaque voluptatibus. In dolor
//             reprehenderit placeat, iste dicta iure mollitia perferendis tempora
//             porro! Sunt, id.
//           </p>
//         </div>
//       </div>
//     </div>
  );
};

export default CollageDetails;
