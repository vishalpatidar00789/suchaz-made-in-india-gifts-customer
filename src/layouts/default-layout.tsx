import React, { FC, useState, useEffect } from 'react';
import { DefaultLayoutWrapper } from './layout.style';
import Loader from '../components/loader';
type LayoutProps = {
    children: any;
    disableLayout: boolean;
    openLoading: boolean;
};
import HeadTag from './seo/head-tag';
import Header from './header';
import HeaderMobile from './header/header-mobile';
import NavigationMobileHeader from './header/navigation/navigation-mobile';
import Footer from './footer';
const DefaultLayout: FC<LayoutProps> = ({ children, disableLayout }) => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 200);
    }, []);
    return (
        <DefaultLayoutWrapper disable={disableLayout}>
            <HeadTag />
            <Loader type={'page-open-loader'} loading={loaded} />
            <Header />
            <HeaderMobile />
            <NavigationMobileHeader />
            {children}
            <Footer />
        </DefaultLayoutWrapper>
    );
};
export default DefaultLayout;

// 'tn': 320px,
// 'xs': 480px,
// 'sm': 768px,
// 'md': 992px,
// 'lg': 1200px,
