import React from 'react'
import './Carousel.css'
import "../index.css"

import bg1 from "../Image/bg1.png"
import bg2 from "../Image/bg2.png"


import { Pagination, EffectCoverflow, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css'
// import 'swiper/swiper.min.css'




const Slider = [
    {
        title: "Donut 1",
        description: " Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings",
        ur: "https://www.istockphoto.com/photo/donut-for-breakfast-on-wood-board-gm1349424408-426038706?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_zsr&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdounts&utm_term=dounts%3A%3A%3A"
    },
    {
        title: "Donut 2",
        description: " Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings",
        url: "https://www.istockphoto.com/photo/woman-buying-croissant-from-a-bakery-store-selecting-holding-a-tray-and-service-tong-gm1435314968-476691784?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_zsr&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdounts&utm_term=dounts%3A%3A%3A"
    },
    {
        title: "Donut 3",
        description: " Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings",
        url: "https://www.istockphoto.com/photo/colorful-donuts-with-sprinkles-on-yellow-background-gm1471653546-502211413?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_zsr&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdounts&utm_term=dounts%3A%3A%3A"
    },
    {
        title: "Donut 4",
        description: " Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings",
        url: "https://www.istockphoto.com/photo/stack-of-glazed-donuts-with-pink-icing-isolated-on-white-background-gm1430392345-473282724?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_zsr&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdounts&utm_term=dounts%3A%3A%3A"
    },
    {
        title: "Donut 5",
        description: " Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings",
        url: "https://www.istockphoto.com/photo/colorful-chocolate-covered-sweet-donuts-with-sweet-sprinkles-dessert-closeup-top-view-gm1329208187-413022214?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdounts&utm_term=dounts%3A%3A%3A"
    },
]

export const Carousel = () => {
    return (
        <div className='carousel'>
            <div className='carousel-content'>
                <span>Discover</span>
                <h1>Yummy Donuts</h1>
                <hr />
                <p>Our donut offers a mouthwatering array of flavors, Toppings and shape for every occasion and cravings</p>
                <a href='#' className='slider-btn'>download app</a>
            </div>
            <Swiper className='myswiper'>
                {
                    slider.map(data => (
                        <SwiperSlide style={{ backgroundImage: `url(${data.url})` }} className='myswiperurl'>
                            <div>
                                <h2>{data.title}</h2>
                                <p>{data.description}</p>
                                <a href={'${data.url}'} target="_blank" className='slider-btn'>Explore</a>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <img src={bg1} alt='' className='bg1' />
            <img src={bg2} alt='' className='bg2' />

        </div>
    )
}
