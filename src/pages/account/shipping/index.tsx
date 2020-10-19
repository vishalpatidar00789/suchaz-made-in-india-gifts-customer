import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import Shipping from 'features/shipping';
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
        url: '/account/checkout',
    },
    {
        text: 'Shipping Information',
    },
];
const ShoppingPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <Shipping/>
    </SinglePageWrapper>
);

ShoppingPage.Layout = MainLayout;

export default ShoppingPage;
