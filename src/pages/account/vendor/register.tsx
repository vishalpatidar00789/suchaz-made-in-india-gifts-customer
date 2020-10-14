import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import VendorRegister from 'features/account/vendor';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Register vendor account',
    },
];
const siteurl = 'https://www.madeinindiagifts.in';
const VendorRegisterPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <VendorRegister/>
    </SinglePageWrapper>
);

VendorRegisterPage.Layout = MainLayout;

export default VendorRegisterPage;
