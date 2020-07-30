import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountDownSimple from '../../../elements/CountDownSimple';
import Link from 'next/link';
import { getProductData } from '../../../../utilities/product-helper';
import CollectionProducts from './modules/CollectionProducts';

class HomeDefaultNewArrival extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { newarrivals } = this.props;
        const products = getProductData(newarrivals);
        let sectionItems;
        if (products && products.length > 0) {
            sectionItems = <CollectionProducts products={products} />;
        } else {
            sectionItems = <p>No Record(s)</p>;
        }
        return (
            <div className="ps-product-list ps-garden-kitchen">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <div className="ps-block--countdown-deal">
                            <div className="ps-block__left">
                                <h3>New Arrival</h3>
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
                        <Link href="/gift?by=New Arrival">
                            <a>View all</a>
                        </Link>
                    </div>
                    <div className="ps-section__content">{sectionItems}</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.collection)(HomeDefaultNewArrival);
