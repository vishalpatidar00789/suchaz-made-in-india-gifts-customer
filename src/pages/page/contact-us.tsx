import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper } from 'assets/styles/page.style';
import ContactForm from 'features/contact/form';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'ContactUs',
    },
];
const siteurl = 'https://www.madeinindiagifts.in';
const ContactUsPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <ContactForm />
    </SinglePageWrapper>
);

ContactUsPage.Layout = MainLayout;

export default ContactUsPage;
