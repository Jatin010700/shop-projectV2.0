"use client";
import React from "react";
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AnimatedText } from "./extra/animatedText";
import Link from "next/link";

export default function HeaderHorizontal() {

    const HeaderArray = [
        {
          title: "Welcome To Our Tech Shop",
          subtitle: "The current best mouse",
          price: "Somekind of mouse ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
          button: (
            <Link href="/store_page">
              Go to Store <i className="bi bi-arrow-left-circle-fill text-white"></i>
            </Link>
          ),
        },
        {
          title: "All tech available!!",
          subtitle: "Keyboard",
          price: "Somekind of keyboard ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
          button: (
            <Link href="/store_page/game">
              Game Store <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
          ),
        },
        {
          title: "Limited edition",
          subtitle: "Games of the year",
          price: "Elden Ring ~ ",
          paraText: "Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore voluptatum nostrum atque, corrupti, vitae esse id accusamus dignissimos neque ..",
          button: (
            <Link href="/store_page/game">
              Game Store <i className="bi bi-arrow-left-circle-fill"></i>
            </Link>
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
                className="mySwiper bg-dark !-z-50">
                    {HeaderArray.map((item, index) => (
                    <SwiperSlide key={index} className="w-full bg-dark">
                        <div className="p-10 pb-0 md:mt-16">
                        <AnimatedText text={item.title} className="md:!text-6xl !mb-0" />
                            <div className="w-full">
                                <h1 className="text-2xl text-RED font-bold">
                                    {item.subtitle}
                                </h1>
                                <h2 className="text-xl font-bold text-white">
                                    {item.price}<span className="text-RED text-2xl">$FREE</span>
                                </h2>
                                <p className="py-2 text-justify text-white">
                                    {item.paraText}
                                </p>
                                <button className="shadow-xl p-2 rounded-full font-bold bg-RED hover:scale-110 duration-150 mt-4 md:mt-0">
                                  {item.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}