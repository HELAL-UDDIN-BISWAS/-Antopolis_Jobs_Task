import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const SwiperCard = () => {
    return (
        <div>
            <div>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    ></Swiper>

                    <SwiperSlide>
                        <img className='rounded h-[500px]' src={'https://i.ibb.co/1Q8Rmfr/pexels-byb-byb-19332231.jpg'} alt="" />
                        <h2></h2>
                    </SwiperSlide>
                </div>
            </div>
        </div>
    );
};

export default SwiperCard;