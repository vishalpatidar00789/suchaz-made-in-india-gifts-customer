import React, { FC, useState, useEffect } from 'react';
import { MainLayoutWrapper } from './layout.style';
import Loader from 'components/loader';
type MainLayoutProps = {
    children: React.ReactNode;
};
import Header from './header';
import HeaderMobile from './header/header-mobile';
import NavigationMobileHeader from './header/navigation/navigation-mobile';
import Footer from './footer';
import { useRouter } from 'next/router';
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    // const { query } = useRouter();
    return (
        <MainLayoutWrapper>
            <Header />
            <HeaderMobile />
            <NavigationMobileHeader />
            {children}
            <Footer />
        </MainLayoutWrapper>
    );
};
export default MainLayout;
