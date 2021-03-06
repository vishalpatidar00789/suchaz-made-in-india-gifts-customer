import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Shipping from '../../components/partials/account/Shipping';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ShippingPage = () => {
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
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Shipping />
            </div>
            {/* <Newsletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default ShippingPage;
