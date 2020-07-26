import React from 'react';
import { carouselFullwidth } from '../../../../../utilities/carousel-helpers';
import Product from '../../../../elements/products/Product';
import Slider from 'react-slick';

const CollectionProducts = ({ products }) => (
    <div>
        {products.length > 3 ? (
            <Slider
                {...carouselFullwidth}
                infinite={products.length > 3 ? true : false}
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
