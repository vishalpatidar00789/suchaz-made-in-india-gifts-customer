import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
        <div>
            <h1>MIIG APP</h1>
            <p>Content</p>
        </div>
        {/* {children} */}
        <BacktoTop scrollStepInPx={1000} delayInMs="0.5" />
    </LayoutWrapper>
);
export default Layout;
