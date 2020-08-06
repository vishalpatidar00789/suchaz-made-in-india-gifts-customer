import React from 'react';
import Link from 'next/link';
import HeaderDefault from '../../../../components/shared/headers/HeaderDefault';
import FooterDefault from '../../../../components/shared/footers/FooterDefault';
import HeaderMobile from '../../../../components/shared/headers/HeaderMobile';
import NavigationList from '../../../../components/shared/navigation/NavigationList';

const ThankYou = () => {
    if (typeof window !== 'undefined') {
        history.pushState(null, document.title, location.href);
        window.addEventListener('popstate', function (event) {
            history.pushState(null, document.title, location.href);
        });
    }

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="jumbotron text-center bg-white">
                <h1 className="display-3">Thank You!</h1>
                <h4>
                    <strong>Your vendor registration request sent successfully.</strong>
                </h4>
                <p className="lead">
                    <strong>MadeInIndiaGifts.in team review it and come back to you.</strong>
                </p>
                <p className="lead">
                    <strong>You may login and start selling once you get your password from us. We don't usually take long time to send it. Thanks!</strong>
                </p>
            </div>
            <FooterDefault />
        </div>
    );
};

export default ThankYou;
