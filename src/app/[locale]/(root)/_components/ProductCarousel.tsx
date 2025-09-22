"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';


interface Dress {
    id: number;
    src: string;
    alt: string;
}


const dresses: Dress[] = [
    { id: 1, src: '/img/vestido-1.jpg', alt: 'Vestido de festa junina azul' },
    { id: 2, src: '/img/vestido-1.jpg', alt: 'Vestido de festa junina azul' },
    { id: 3, src: '/img/vestido-1.jpg', alt: 'Vestido de festa junina azul' },
    { id: 4, src: '/img/vestido-1.jpg', alt: 'Vestido de festa junina azul' },
    { id: 5, src: '/img/vestido-1.jpg', alt: 'Vestido de festa junina azul' },
];


export const ProductCarousel: React.FC = () => {
    return (
        <section className="relative flex items-center max-w-7xl h-[324px] mx-auto rounded-2xl bg-[#B380FF] px-12 py-12 sm:px-16 md:pl-24 bg-[url('/img/textura.png')] bg-cover bg-no-repeat bg-center">
            <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
                <div className="relative ">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={3}
                        loop={true}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        className="!pb-2"
                    >
                        
                        {dresses.map((dress) => (
                            <SwiperSlide key={dress.id}>
                                <div className="h-64 overflow-hidden rounded-xl border-4 border-white bg-pink-100 p-3 shadow-lg">
                                    <Image
                                        src={dress.src}
                                        alt={dress.alt}
                                        width={200}
                                        height={300}
                                        className="h-full w-full rounded-md object-cover"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className="swiper-button-prev-custom absolute -left-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white">
                        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
                    </button>

                    <button className="swiper-button-next-custom absolute -right-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-3 text-gray-700 shadow-md backdrop-blur-sm transition-all hover:scale-105 hover:bg-white">
                        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
                    </button>

                </div>

                <div className="text-left text-white">
                    <span className="text-lg font-semibold text-white/80">—  Estoque</span>
                    <h2 className="mt-2 text-4xl font-weight text-white tracking-tight">Alguns vestidos disponíveis</h2>
                    <p className="mt-4 max-w-lg text-base text-white/90 leading-relaxed">Lorem ipsum dolor sit amet. Sit ratione perferendis est consequatur nobis in doloribus reprehenderit est saepe velit sed dolorum quaerat. Est adipisci laborum qui dolor galisum sit consequatur distinctio. Est ipsa fugit ut reprehenderit nemo et nostrum nisi At illum molestias.</p>
                </div>
            </div>
        </section>
    );
}