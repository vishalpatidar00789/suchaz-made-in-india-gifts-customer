import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import { getProductData } from '../../../../utilities/product-helper';
import CollectionProducts from './modules/CollectionProducts';
import LoadingSkeleton from '../../../elements/LoadingSkeleton';
import ClipLoader from 'react-spinners/ClipLoader';

class HomeDefaultNewArrival extends Component {
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
        const { newarrivals } = this.props;
        const products = getProductData(newarrivals);
        let sectionItems;
        if (isLoading) {
            sectionItems = (
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <ClipLoader
                        size={80}
                        color={'#c3404e'}
                        loading={this.state.isLoading}
                    />
                </div>
            );
        } else {
            if (products && products.length > 0) {
                sectionItems = <CollectionProducts products={products} />;
            } else {
                sectionItems = <p>Loading...</p>;
            }
        }

        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>New Arrival</h3>
                            </div>
                            <div className="ps-block__right">
                                {/* <figure>
                                    <figcaption>End in:</figcaption>
                                    <CountDownSimple
                                        timeTillDate="12 31 2020, 6:00 am"
                                        timeFormat="MM DD YYYY, h:mm a"
                                    />
                                </figure> */}
                            </div>
                        </div>
                        <div className="ps-block--countdown-deal">
                            <div>
                                {' '}
                                <Link href="/gifts?by=New Arrival">
                                    <a>View all </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="ps-section__content">{sectionItems}</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.collection)(HomeDefaultNewArrival);
