"use client";
import React from "react";
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AnimatedText } from "./extra/animatedText";

export default function HeaderHorizontal() {

    const HeaderArray = [
        {
          title: "Welcome To Our Tech Shop",
          subtitle: "The current best mouse",
          price: "Somekind of mouse ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
          button: (
            <button className="shadow-xl p-2 rounded-full font-bold bg-RED hover:scale-110 duration-150 mt-4 md:mt-0">
              Go to Store <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
          ),
        },
        {
          title: "All tech available!!",
          subtitle: "Keyboard",
          price: "Somekind of keyboard ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
        },
        {
          title: "Limited edition",
          subtitle: "Games of the year",
          price: "Elden Ring ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
          button: (
            <button className="shadow-xl p-2 rounded-full font-bold bg-RED hover:scale-110 duration-150 mt-4 md:mt-0">
              Game Store <i className="bi bi-arrow-left-circle-fill"></i>
            </button>
          ),
        },
      ];

    return (
        <>
            <Swiper
                allowTouchMove={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                      translate: [0, 0, -400],
                    },
                    next: {
                      translate: ['100%', 0, 0],
                    },
                  }}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                className="mySwiper bg-dark">
                    {HeaderArray.map((item, index) => (
                    <SwiperSlide key={index} className="w-full bg-dark">
                        <div className="p-10 md:mt-16">
                        <AnimatedText text={item.title} className="!text-6xl" />
                            <div className="w-full">
                                <h1 className="text-2xl text-RED font-bold">
                                    {item.subtitle}
                                </h1>
                                <h2 className="text-xl font-bold">
                                    {item.price}<span className="text-RED text-2xl">$FREE
                                </span>
                                </h2>
                                <p className="py-2 text-justify">
                                    {item.paraText}
                                </p>
                                {item.button}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}