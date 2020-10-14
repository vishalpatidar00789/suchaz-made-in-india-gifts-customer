import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import Register from 'features/account/register';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Register an account',
    },
];
const siteurl = 'https://www.madeinindiagifts.in';
const RegisterPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <Register />
    </SinglePageWrapper>
);

RegisterPage.Layout = MainLayout;

export default RegisterPage;
