import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import Login from 'features/account/login';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Login',
    },
];
const siteurl = 'https://www.madeinindiagifts.in';
const LoginPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <Login />
    </SinglePageWrapper>
);

LoginPage.Layout = MainLayout;

export default LoginPage;
