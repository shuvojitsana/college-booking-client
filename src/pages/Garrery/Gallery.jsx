import React from 'react';

const Gallery = () => {
      return (
            <div className='my-24'>
                  <div className='text-center pb-10'>
                        <h2 className='text-3xl font-medium'>PHOTO GALLERY</h2>
                        <p>There are many variations of passages</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 hover:cursor-pointer  " >
                        <img src="https://htmldemo.net/study/study/img/gallery/big-1.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-2.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-3.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-4.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-5.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-6.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-7.jpg" alt="" />
                        <img src="https://htmldemo.net/study/study/img/gallery/big-8.jpg" alt="" />
                  </div>
            </div>
      );
};

export default Gallery;