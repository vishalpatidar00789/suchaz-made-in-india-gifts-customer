import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Compare from '../../components/partials/account/Compare';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ComparePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Compare',
        },
    ];
    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Compare />
            </div>
            <FooterDefault />
        </div>
    );
};

export default ComparePage;
