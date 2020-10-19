import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import Checkout from 'features/checkout';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Shopping Cart',
        // url: '/account/shopping-cart',
    },
    {
        text: 'Checkout Information',
    },
];
const ShoppingCartPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <Checkout/>
    </SinglePageWrapper>
);

ShoppingCartPage.Layout = MainLayout;

export default ShoppingCartPage;
