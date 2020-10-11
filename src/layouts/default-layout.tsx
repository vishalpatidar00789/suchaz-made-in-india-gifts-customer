import React, { FC } from 'react';
import { DefaultLayoutWrapper } from './layout.style';
type LayoutProps = {
    children: React.ReactNode;
};
import Footer from './footer';
import Header from './header';
import HeaderMobile from './header/header-mobile';
import NavigationMobileHeader from './header/navigation/navigation-mobile';
const DefaultLayout: FC<LayoutProps> = ({ children }) => {
    return (
        <DefaultLayoutWrapper>
            {/* <Header /> */}
            {/* <HeaderMobile /> */}
            {/* <NavigationMobileHeader /> */}
            {children}
            {/* <Footer /> */}
        </DefaultLayoutWrapper>
    );
};
export default DefaultLayout;
