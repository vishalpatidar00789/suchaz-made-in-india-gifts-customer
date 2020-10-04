import ArrowButton from 'components/carousel/arrow-button';
import React from 'react';

export const carouselStandard = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
    prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const carouselInSidebar = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
    prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const carouselFullwidth = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
    prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
    lazyload: true,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
    ],
};

export const carouselSingle = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowButton directionType="next" icon="icon-chevron-right" />,
    prevArrow: <ArrowButton directionType="prev" icon="icon-chevron-left" />,
};
