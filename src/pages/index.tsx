import React from 'react';
import HomePage from 'features/home-page';
import { NextPage } from 'next';
import DefaultLayout from 'layouts/default-layout';
type Page = NextPage & { Layout?: React.FC };

const IndexPage: Page = () => <HomePage />;

IndexPage.Layout = DefaultLayout;

export default IndexPage;
