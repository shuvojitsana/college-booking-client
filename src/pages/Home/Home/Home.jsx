import React from 'react';
import Banner from '../../Banner/Banner';
import Card from '../../card/Card';
import Another from '../../Another/Another';
import Gallery from '../../Garrery/Gallery';
import Events from '../../Events/Events';
import SpcialClass from '../../SpcialClass/SpcialClass';


const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <Another></Another>
            <Card></Card>
            <Gallery></Gallery>
            <Events></Events>
            <SpcialClass></SpcialClass>
            
        </div>
    );
};

export default Home;