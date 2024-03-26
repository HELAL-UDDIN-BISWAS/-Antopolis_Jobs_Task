import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './../Swiper/SwiperCard.css'
import image1 from "./../../../public/pizza 2 1.png"
import image2 from "./../../../public/image1.png"
import image3 from "./../../../public/image-22 1.png"
import image4 from "./../../../public/image 3.png"

import { IoMdStar } from "react-icons/io";


const SwiperCard = () => {
    return (
        <div>
            <div >
                <div >
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={25}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image1} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image2} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image3} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image4} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image1} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div class="card">
                                    <img src={image3} alt="" />
                                    <h2>Pepperoni Pizza</h2>
                                    <p>Di napoles</p>
                                    <p>$11,99</p>
                                    <button>Add To Cart</button>
                                </div>
                                <div className='Vector'>
                                    <IoMdStar></IoMdStar>
                                    <p>4</p>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default SwiperCard;