import React, { FC } from 'react';
import ProductVendorWrapper from './peoduct-vendor.style';
type ProductVendorProps = {
    product: any;
};
const ProductVendor: FC<ProductVendorProps> = ({ product }) => {
    return (
        <ProductVendorWrapper>
            <section>
                <h4>{product.vendor?.shop_name ? product.vendor.shop_name : '\u00A0'}</h4>
                <p>
                    {product.vendor?.description ? product.vendor.description : '\u00A0'}
                    {/* Digiworld US, New York’s no.1 online retailer was established in May 2012 with the aim
            and vision to become the one-stop shop for retail in New York with implementation of
            best practices both online */}
                </p>
                {/* <a href="#">More Products from Gopro</a> */}
            </section>
        </ProductVendorWrapper>
    );
};

export default ProductVendor;
