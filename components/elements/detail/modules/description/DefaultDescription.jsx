import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

import PartialDescription from './PartialDescription';
import PartialSpecification from './PartialSpecification';
import PartialVendor from './PartialVendor';
import PartialReview from './PartialReview';
import PartialOffer from './PartialOffer';

class DefaultDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, currency, singleProduct } = this.props;
        const specification = JSON.parse(product.specification).filter((spec) => {
            return spec.key != '';
        });
             let specificationTab = '';
            if(specification!=""){
                specificationTab =   (
                    <TabPane tab="Specification" key="2">
                         
                        <PartialSpecification product={product} />
                    </TabPane>
                );
            }
            let totalRating = (singleProduct.totalRating)  ? singleProduct.totalRating : 0;
            const totalReviews = `Reviews (`+totalRating+`)`;
        return (
            <div>
                <div className="ps-product__content ps-tab-root">
                    <Tabs defaultActiveKey="1">
                        {/* <TabPane tab="Description" key="1">
                            <PartialDescription product={product} />
                        </TabPane> */}
                      
                        {specificationTab}
                        <TabPane tab="Vendor" key="3">
                            <PartialVendor product={product} />
                        </TabPane>
                        <TabPane tab={totalReviews} key="4">
                            <PartialReview />
                        </TabPane>
                        {/* <TabPane tab="Questions and Answers" key="5">
                            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                                <p>Coming Soon!</p>
                            </div>
                        </TabPane> */}
                        {/* <TabPane tab="More Offers" key="6">
                            <PartialOffer />
                        </TabPane> */}
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default connect((state) => state.product)(DefaultDescription);
