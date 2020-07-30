import React from 'react';
import Link from 'next/link';
import { useRouter, Router } from 'next/router';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';

const ThankYou = () => {
    if (typeof window !== 'undefined') {
        history.pushState(null, document.title, location.href); window.addEventListener('popstate', function (event) {   history.pushState(null, document.title, location.href); });
    }
    const router = useRouter();
    console.log(router);
    const { orderID } = router.query;

    return (
        <div className="site-content">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="jumbotron text-center bg-white">
                <h1 className="display-3">Thank You!</h1>
                {orderID ? (
                    <div>
                        <h4>
                            <strong>Your order is successfully placed!</strong>
                        </h4>
                        <h5>
                            <strong>Order ID : {orderID}</strong>
                        </h5>
                    </div>
                ) : (
                    <h4>
                        <strong>Your order is successfully placed!</strong>
                    </h4>
                )}
                <p className="lead">
                    <strong>Please check your email</strong> for further
                    instructions.
                </p>
                <hr />
                <p className="lead">
                    <Link href="/">
                        <a className="ps-btn text-white" href="#" role="button">
                            Continue shopping!
                        </a>
                    </Link>
                </p>
            </div>
            {/* <Newletters /> */}
            <FooterDefault />
        </div>
    );
};

export default ThankYou;
