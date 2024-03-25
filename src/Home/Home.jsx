import React from 'react';
import NavberPage from '../Section/Navber/Navber';
import Banner from '../Section/Banner/Banner';
import './../App.css'

const Home = () => {
    return (
        <div>
           <NavberPage></NavberPage>
            <Banner></Banner>
            <h2 className='hadingText'>Our Popular <span className='spanText'>Categories</span></h2>
        </div>
    );
};

export default Home;