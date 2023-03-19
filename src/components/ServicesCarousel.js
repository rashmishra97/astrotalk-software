import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { GiLuckyFisherman } from 'react-icons/gi'

const ServicesCarousel = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <h3>Complementart Astrology Services </h3>
            <div style={{
                // backgroundColor: "#dedede",
                // maxWidth: "1200px",
                // margin: "auto",
                // border: "2px solid red",
            }} >
                <Carousel responsive={responsive}>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} ><a href='www'>
                            <GiLuckyFisherman />
                        </a>
                    </div>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} >Item 2</div>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} >Item 3</div>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} >
                        Item 4
                    </div>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} >Item 5</div>
                    <div style={{
                        width: '290px',
                        height: '130px',
                        boxShadow: "1px 1px 2px 1px #888888",
                        margin: "10px 0px",
                        backgroundColor: "white",
                        borderRadius: '5px'
                    }} >Item 6</div>
                </Carousel>;
            </div>
        </>
    )
}

export default ServicesCarousel