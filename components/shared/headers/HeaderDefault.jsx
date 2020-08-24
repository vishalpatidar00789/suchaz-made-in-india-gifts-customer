import React, { Component } from 'react';
import Link from 'next/link';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import { stickyHeader } from '../../../utilities/common-helpers';
import { connect } from 'react-redux';
import { getMenus } from '../../../store/collection/action';

class HeaderDefault extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getMenus());
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    render() {
        return (
            <header
                className="header header--1"
                data-sticky="true"
                id="headerSticky">
                <div className="header__top">
                    <div className="ps-container">
                        <div className="header__left">
                            <div
                                className="menu--product-categories"
                                style={{ display: 'block' }}>
                                <div className="menu__content">
                                    <MenuCategories />
                                </div>
                            </div>
                            <Link href="/">
                                <a className="ps-logo">
                                    <img
                                        src="/static/img/logo_light.png"
                                        alt="MadeInIndiaGifts.in"
                                    />
                                </a>
                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>
                                        <Link href="/">
                                            <img
                                                src="/static/img/logo_light.png"
                                                alt="MadeInIndiaGifts.in"
                                            />
                                        </Link>
                                    </span>
                                </div>
                                <div className="menu__content">
                                    <MenuCategories />
                                </div>
                            </div>
                        </div>
                        <div className="header__center"></div>
                        <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
                </div>
                <NavigationDefault />
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(HeaderDefault);