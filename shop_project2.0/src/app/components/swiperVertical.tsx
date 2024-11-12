"use client";
import React from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeaderVertical() {

    const HeaderImageArray = [
        {
          image: "/assets/mouse.jpg",
        },
        {
          image: "/assets/keyboard.jpg",
        },
        {
          image: "/assets/game1.jpg",
        },
      ];
    return (
        <>
            <Swiper
                allowTouchMove={false}
                direction={"vertical"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect={'creative'}
                creativeEffect={{
                  prev: {
                    translate: [0, '-20%', -1],
                  },
                  next: {
                    translate: [0, '100%', 0],
                  },
                }}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                className="mySwiper bg-dark h-[20rem] md:h-[33rem] !-z-50">
                {HeaderImageArray.map((item, index) => (
                    <SwiperSlide key={index} className="w-full bg-dark ">
                            <div className="p-10 pt-4 md:mt-20">
                                <Image
                                    src={item.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-full rounded-lg" 
                                />
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}