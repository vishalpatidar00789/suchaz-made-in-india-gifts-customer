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
                                            src="/static/img/slider/made-in-india-gifts-vocal-for-local.png"
                                            alt="Vocal for Local with MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                            <div className="ps-banner">
                                {/* <Link href="/shop"> */}
                                    <a>
                                        <img
                                            src="/static/img/slider/offer-clock.png"
                                            alt="Hot deals on decorative wall clocks at MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                            <div className="ps-banner">
                                {/* <Link href="/shop"> */}
                                    <a>
                                        <img
                                            src="/static/img/slider/zero-contact-delivery-indiagifts.png"
                                            alt="We deliver gits with zero contact at MadeInIndiaGifts.in"
                                        />
                                    </a>
                                {/* </Link> */}
                            </div>
                        </Slider>
                    </div>
                    {/* <div className="ps-section__right">
                            <a className="ps-collection">
                                <img
                                    src="/static/img/slider/ganpati-small-banner-1.png"
                                    alt="MadeInIndiaGifts.in"
                                />
                            </a>
                            <a className="ps-collection">
                                <img
                                    src="/static/img/slider/ganpati-small-banner-2.png"
                                    alt="MadeInIndiaGifts.in"
                                />
                            </a>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default HomeBanner;
