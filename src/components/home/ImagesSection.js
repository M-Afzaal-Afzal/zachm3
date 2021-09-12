import React from 'react';
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';

import SwiperCore, {
    Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const ImagesSection = () => {
    return (
        <Box>
            <Swiper slidesPerView={'auto'} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/1.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/2.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/3.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/4.jpeg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/1.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}> <Box
                    sx={{width: '200px', height: '200px', position: 'relative'}}>
                    <Image src={'/home/2.jpg'} layout={'fill'} objectFit={'cover'}/>
                </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/1.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/2.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/3.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/4.jpeg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: '200px', height: '200px', position: 'relative'}}>
                        <Image src={'/home/1.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}> <Box
                    sx={{width: '200px', height: '200px', position: 'relative'}}>
                    <Image src={'/home/2.jpg'} layout={'fill'} objectFit={'cover'}/>
                </Box>
                </SwiperSlide>

            </Swiper>
        </Box>
    );
};

export default ImagesSection;