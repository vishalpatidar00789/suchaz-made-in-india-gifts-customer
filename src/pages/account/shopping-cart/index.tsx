import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import ShoppingCart from 'features/cart/shopping';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Shopping Cart',
    },
];
const ShoppingCartPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <ShoppingCart />
    </SinglePageWrapper>
);

ShoppingCartPage.Layout = MainLayout;

export default ShoppingCartPage;
