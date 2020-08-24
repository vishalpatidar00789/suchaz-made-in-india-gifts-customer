import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Slider from 'react-slick';
import ProductDealOfDay from '../../../elements/products/ProductDealOfDay';
import { carouselFullwidth } from '../../../../utilities/carousel-helpers';
import { getProductData } from '../../../../utilities/product-helper';
import ClipLoader from 'react-spinners/ClipLoader';

class HomeDefaultDealOfDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1500);
    }
    render() {
        const { isLoading } = this.state; 
        const { collections } = this.props; 
        const products = getProductData(collections);
        return (
            <div className="ps-product-list">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>Deal of the day</h3>
                            </div>
                            {/* <div className="ps-block__right">
                                <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2020, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                     />
                                </figure>
                            </div> */}
                        </div>
                        <Link href="/gifts?by=Deal of the day&id=&sortBy=offer">
                            <a>View all</a>
                        </Link>
                    </div>
                    <div className="ps-section__content">
                    {isLoading ? (
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <ClipLoader
                            size={80}
                            color={'#c3404e'}
                            loading={this.state.isLoading}
                        />
                    </div>
                ) : (
                    ''
                )}
                        <Slider
                            {...carouselFullwidth}
                            className="ps-carousel outside">
                            {products.map(product => (
                                <ProductDealOfDay
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(HomeDefaultDealOfDay);
