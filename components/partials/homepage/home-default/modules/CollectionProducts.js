import React from 'react';
// import { carouselFullwidth } from '../../../../../utilities/carousel-helpers';
import Product from '../../../../elements/products/Product';
import Slider from 'react-slick';
import NextArrow from '../../../../elements/carousel/NextArrow';
import PrevArrow from '../../../../elements/carousel/PrevArrow';

let carouselFullwidth = {
    dots: true,
    infinite: false,
    speed: 750,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
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
    ]
  }

const CollectionProducts = ({ products }) => (
    <div>
        {products.length > 0 ? (
            <Slider
                {...carouselFullwidth}
                infinite={products.length > 7 ? true : false}
                className="ps-carousel outside">
                    {products.map((product) => (
                    <div className="item" key={product.id}>
                        <Product product={product} />
                    </div>
                ))}
                </Slider>
        ) : (
            <div>
                {/* {products.map((product) => (
                    <div className="item" key={product.id}>
                        <Product product={product} />
                    </div>
                ))} */}
            </div>
        )}
    </div>
);

export default CollectionProducts;
