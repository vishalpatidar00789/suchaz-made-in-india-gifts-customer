import Thumbnail from 'components/thumbnail';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductDescription from './description';
import ProductInformation from './information';
import ProductDetatilWrapper, { ProductDetatilHeader } from './product-detail.style';
const ProductDetail: FC = () => {
    const { singleProduct } = useSelector((state) => state.product);
    return (
        <>
            {singleProduct ? (
                <ProductDetatilWrapper>
                    <ProductDetatilHeader>
                        <Thumbnail product={singleProduct} />
                        <ProductInformation product={singleProduct} />
                    </ProductDetatilHeader>
                    <ProductDescription product={singleProduct} />
                </ProductDetatilWrapper>
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
};

export default ProductDetail;
