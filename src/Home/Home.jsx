import React from 'react';
import NavberPage from '../Section/Navber/Navber';
import Banner from '../Section/Banner/Banner';
import './../App.css'
import Item from '../Section/Item/Item';
import SwiperCard from '../Section/Swiper/SwiperCard';

const Home = () => {
    return (
        <div>
           <NavberPage></NavberPage>
            <Banner></Banner>
            <h2 className='hadingText'>Our Popular <span className='spanText'>Categories</span></h2>
            <Item></Item>
            <SwiperCard></SwiperCard>
        </div>
    );
};

export default Home;