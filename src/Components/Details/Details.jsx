import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
      const details = useLoaderData();
      console.log(details);
      return (
            <div>
                 there : {details.Collage_name}
            </div>
      );
};

export default Details;