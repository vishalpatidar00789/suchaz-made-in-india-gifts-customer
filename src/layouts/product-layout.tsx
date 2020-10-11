import React, { FC } from 'react';
import { ProductLayoutWrapper } from './layout.style';
type ProductLayoutProps = {
    children: React.ReactNode;
};
import Footer from './footer';
import Header from './header';
import HeaderMobile from './header/header-mobile';
import NavigationMobileHeader from './header/navigation/navigation-mobile';
import HeaderMobileProduct from './header/product/header-mobile-product';
const ProductLayout: FC<ProductLayoutProps> = ({ children }) => {
    return (
        <ProductLayoutWrapper>
            <Header />
            <HeaderMobileProduct />
            {/* <HeaderMobile /> */}
            {/* <NavigationMobileHeader /> */}
            {children}
            <Footer />
        </ProductLayoutWrapper>
    );
};
export default ProductLayout;
