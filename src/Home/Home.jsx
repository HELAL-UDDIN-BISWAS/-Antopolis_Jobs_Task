import React from 'react';
import NavberPage from '../Section/Navber/Navber';
import Banner from '../Section/Banner/Banner';
import './../App.css'
import Item from '../Section/Item/Item';
import SwiperCard from '../Section/Swiper/SwiperCard';
import Teamwork from '../Section/Teamwork/Teamwork';
import Footer from '../Section/Footer/Footer';

const Home = () => {
    return (
        <div>
           <NavberPage></NavberPage>
           
            <Banner></Banner>
            <h2 className='hadingText'>Our Popular <span className='spanText'>Categories</span></h2>
            <Item></Item>
            <SwiperCard></SwiperCard>
            <h2 className='hadingText2'>Get to know <span>us</span></h2>
            <Teamwork></Teamwork>
            <Footer></Footer>
        </div>
    );
};

export default Home;