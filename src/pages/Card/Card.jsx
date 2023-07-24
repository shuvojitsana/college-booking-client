import React, { useEffect, useState } from 'react';
import CollageCard from './CollageCard';

const Card = () => {
      const [colleges, setColleges] = useState([]);

      useEffect(() =>{
            fetch("/public/college.json")
            .then(res=> res.json())
            .then(data =>{
                  setColleges(data)
            })
      },[]);
      console.log(colleges);
      return (
            <div className='my-18 bg-slate-200'>
                  <div className='text-center pt-20'>
                        <h2 className='font-medium text-3xl'>Our College Section</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have <br />suffered alteration in some form, by injected humour.</p>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-3'>
                  {
                     colleges.map(item => <CollageCard key={item._id} item={item}></CollageCard>)   
                  }
                  </div>
            </div>
      );
};

export default Card;