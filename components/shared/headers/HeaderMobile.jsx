import React, { Component } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';

class HeaderMobile extends Component {
    constructor({ props }) {
        super(props);
    }

    render() {
        return (
            <header className="header header--mobile">
                <div className="navigation--mobile">
                    <div className="navigation__left" style={{margin: "auto"}}>
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/logo_light.png"
                                    alt="MadeInIndiaGifts.in"
                                />
                            </a>
                        </Link>
                    </div>
                    <Link href="/account/vendor/register">
                            <a >
                                Become a Seller
                            </a>
                        </Link>
                </div>
                {/* <div className="ps-search--mobile">
                    <form
                        className="ps-form--search-mobile"
                        action="/"
                        method="get">
                        <div className="form-group--nest">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search something..."
                            />
                            <button>
                                <i className="icon-magnifier"></i>
                            </button>
                        </div>
                    </form>
                </div> */}
            </header>
        );
    }
}

export default HeaderMobile;
