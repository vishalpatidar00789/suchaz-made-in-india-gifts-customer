import React, { FC } from 'react';
import { DefaultLayoutWrapper } from './layout.style';
import Loader from '../components/loader';
type LayoutProps = {
    children: any;
    disableLayout: boolean;
    openLoading: boolean;
};
import HeadTag from './seo/head-tag';
import Header from './header';
const DefaultLayout: FC<LayoutProps> = ({ children, disableLayout, openLoading }) => (
    <DefaultLayoutWrapper disable={disableLayout}>
        <HeadTag />
        <Loader type={'page-open-loader'} loading={openLoading} />
        {children}
    </DefaultLayoutWrapper>
);
export default DefaultLayout;

// 'tn': 320px,
// 'xs': 480px,
// 'sm': 768px,
// 'md': 992px,
// 'lg': 1200px,
