import React, { FC, useState, useEffect } from 'react';
import { DefaultLayoutWrapper } from './layout.style';
import Loader from 'components/loader';
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
import { useRouter } from 'next/router';
const DefaultLayout: FC<LayoutProps> = ({ children, disableLayout }) => {
    const { query } = useRouter();
    const [loaded, setLoaded] = useState<boolean>(false);
    const [disable, setDisable] = useState<boolean>(false);

    useEffect(() => {
        let mounted = true;
        if (Object.keys(query).length > 0) {
            setDisable(true);
        } else {
            if (mounted) {
                setTimeout(() => {
                    setLoaded(true);
                }, 200);
            }
        }
        return () => (mounted = false);
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
