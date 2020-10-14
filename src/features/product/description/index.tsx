import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCart, removeItem } from 'store/cart/action';
import { Tabs } from 'antd';
import ProductSpecification from './product-specification';
import ProductDescWrapper from './product-description.style';
import ProductVendor from './product-vendor';
import ProductReview from './product-review';
const { TabPane } = Tabs;
type ProductDescProps = {
    product: any;
};
const ProductDescription: FC<ProductDescProps> = ({ product }) => {
    const dispatch = useDispatch();
    const { singleProduct } = useSelector((state) => state.product);
    const [quantity, setQuantity] = useState<number>(1);

    const handleRemoveCartItem = (product) => {
        dispatch(removeItem(product));
    };

    const specification = JSON.parse(product.specification).filter((spec) => {
        return spec.key != '';
    });

    let specificationTab = null;
    if (specification != '') {
        specificationTab = (
            <TabPane tab="Specification" key="1">
                <ProductSpecification product={product} />
            </TabPane>
        );
    }

    let totalRating = singleProduct.totalRating ? singleProduct.totalRating : 0;
    const totalReviews = `Reviews (` + totalRating + `)`;

    return (
        <ProductDescWrapper>
            <Tabs defaultActiveKey="1">
                {/* <TabPane tab="Description" key="1">
                            <PartialDescription product={product} />
                        </TabPane> */}

                {specificationTab}
                <TabPane tab="Vendor" key="2">
                    <ProductVendor product={product} />
                </TabPane>
                <TabPane tab={totalReviews} key="3">
                    <ProductReview/>
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
        </ProductDescWrapper>
    );
};

export default ProductDescription;
