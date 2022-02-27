import { Navigation, Autoplay, Scrollbar, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default (props:any) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            // install Swiper modules
            slidesPerView={props.sw ? props.sw : 1}
            spaceBetween={20}
            navigation={{
                nextEl: props.nextElClass ? props.nextElClass : null, 
                prevEl: props.prevElClass ? props.prevElClass : null
            }}
            pagination={{ clickable: true }}
            autoplay={{
                delay: props.delay ? props.delay : 3500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                // when window width is >= 320px
                720: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                992: {
                    slidesPerView: props.mdSPV ? props.mdSPV : 3,
                    spaceBetween: 20
                },
                1200: {
                    slidesPerView: props.lgSPV ? props.lgSPV : 4,
                    spaceBetween: 20,
                }

            }}
        >
            {props.children}
        </Swiper>
    );
};