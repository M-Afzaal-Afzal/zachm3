import React, {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import Image from 'next/image';

import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const ImagesSection = () => {

    const [imageSize,setImageSize] = useState(200);

    useEffect(() => {
        setImageSize((window.innerWidth/3))
    },[])

    return (
        <Box id={'about'} sx={{display: 'grid'}}>
            <Swiper navigation={true} slidesPerView={'3'} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/1.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/2.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height:imageSize, position: 'relative'}}>
                        <Image priority src={'/home/3.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height:imageSize, position: 'relative'}}>
                        <Image priority src={'/home/4.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/5.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}> <Box
                    sx={{width:imageSize,margin: '4px', height: imageSize, position: 'relative'}}>
                    <Image priority src={'/home/6.png'} layout={'fill'} objectFit={'cover'}/>
                </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/7.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width: imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/8.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>
                <SwiperSlide className={'swiper-slide'}>
                    <Box sx={{width:imageSize, margin: '4px', height: imageSize, position: 'relative'}}>
                        <Image priority src={'/home/9.png'} layout={'fill'} objectFit={'cover'}/>
                    </Box>
                </SwiperSlide>

            </Swiper>
        </Box>
    );
};

export default ImagesSection;