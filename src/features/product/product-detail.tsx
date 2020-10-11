import Thumbnail from 'components/thumbnail';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductInfo from './info';
import ProductDetatilWrapper, { ProductDetatilHeader } from './product-detail.style';
const ProductDetail: FC = () => {
    const { singleProduct } = useSelector((state) => state.product);
    return (
        <>
            {singleProduct ? (
                <ProductDetatilWrapper>
                    <ProductDetatilHeader>
                        <Thumbnail product={singleProduct} />
                        <ProductInfo product={singleProduct} />
                    </ProductDetatilHeader>
                    {/* <DefaultDescription product={singleProduct} /> */}
                </ProductDetatilWrapper>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default ProductDetail;
