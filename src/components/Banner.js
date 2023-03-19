import React from 'react'
import BannerCards from './BannerCards';
import SliderComponent from '../SliderComponent';
import ServicesCarousel from './ServicesCarousel';

const Banner = () => {

    return (
        <div style={{ background: "#000" }} >
            <SliderComponent />
            <BannerCards />
            <ServicesCarousel />
        </div>
    )
}

export default Banner; 