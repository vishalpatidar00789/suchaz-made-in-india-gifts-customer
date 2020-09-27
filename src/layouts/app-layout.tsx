import React, { FC } from 'react';
import { LayoutWrapper } from './app-layout.style';
import Loader from '../components/loader';
import BacktoTop from 'components/backtotop';
type LayoutProps = {
    children: any;
    disableLayout: boolean;
    openLoading: boolean;
};
const Layout: FC<LayoutProps> = ({ children, disableLayout, openLoading }) => (
    <LayoutWrapper disable={disableLayout}>
        <Loader type={'page-open-loader'} loading={openLoading} />
        {children}
        <BacktoTop scrollStepInPx={1000} delayInMs="0.5" />
    </LayoutWrapper>
);
export default Layout;


    // 'tn': 320px,
    // 'xs': 480px,
    // 'sm': 768px,
    // 'md': 992px,
    // 'lg': 1200px,
