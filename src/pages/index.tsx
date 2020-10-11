import React from 'react';
import HomePage from 'features/home-page';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
type Page = NextPage & { Layout?: React.FC };

const IndexPage: Page = () => <HomePage />;

IndexPage.Layout = MainLayout;

export default IndexPage;
