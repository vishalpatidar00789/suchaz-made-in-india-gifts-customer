import React, { Component } from 'react';

import Slider from 'react-slick';
import NextArrow from '../../../elements/carousel/NextArrow';
import PrevArrow from '../../../elements/carousel/PrevArrow';
import Link from 'next/link';

class HomeBanner extends Component {
    render() {
        const carouselSetting = {
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        };
        return (
            <div className="ps-home-banner ps-home-banner--1">
                <div className="ps-container">
                    <div className="ps-section__left">
                        <Slider {...carouselSetting} className="ps-carousel">
                            <div className="ps-banner">
                                {/* <Link href="/shop"> */}
                                    <a>
                                        <img
                                            src="/static/img/slider/ganpati-banner-big.png"
                                            alt="MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                            <div className="ps-banner">
                                {/* <Link href="/shop"> */}
                                    <a>
                                        <img
                                            src="/static/img/slider/india-sathi-bappa.png"
                                            alt="MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                            <div className="ps-banner">
                                {/* <Link href="/shop"> */}
                                    <a>
                                        <img
                                            src="/static/img/slider/zero-contact-delivery-banner.png"
                                            alt="MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                        </Slider>
                    </div>
                    <div className="ps-section__right">
                        {/* <Link href="/shop"> */}
                            <a className="ps-collection">
                                <img
                                    src="/static/img/slider/ganpati-small-banner-1.png"
                                    alt="MadeInIndiaGifts.in"
                                />
                            </a>
                        {/* </Link> */}
                        {/* <Link href="/shop"> */}
                            <a className="ps-collection">
                                <img
                                    src="/static/img/slider/ganpati-small-banner-2.png"
                                    alt="MadeInIndiaGifts.in"
                                />
                            </a>
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBanner;
