import React from 'react'
import BannerCards from './BannerCards';
import SliderComponent from '../SliderComponent';

const Banner = () => {
    return (
        <div style={{ background: "black", padding: "10px 0px" }} >
            <SliderComponent />
            <BannerCards />
        </div>
    )
}

export default Banner;