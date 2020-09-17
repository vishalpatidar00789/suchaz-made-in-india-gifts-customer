import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelSearch from '../panel/PanelSearch';
import PanelCategories from '../panel/PanelCategories';
import Link from 'next/link';
import Login from '../../../components/partials/account/Login';
import Invoices from '../../../components/partials/account/Invoices';
import { withRouter } from 'next/router';

class NavigationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        };
    }

    handleDrawerClose = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    handleShowMenuDrawer = () => {
        this.setState({
            menuDrawer: !this.state.menuDrawer,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };

    handleShowCartDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: !this.state.cartDrawer,
            searchDrawer: false,
            categoriesDrawer: false,
        });
    };
    handleShowSearchDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: !this.state.searchDrawer,
            categoriesDrawer: false,
        });
    };
    handleShowCategoriesDrawer = () => {
        this.setState({
            menuDrawer: false,
            cartDrawer: false,
            searchDrawer: false,
            categoriesDrawer: !this.state.categoriesDrawer,
        });
    };

    render() {
        const {
            menuDrawer,
            searchDrawer,
            cartDrawer,
            categoriesDrawer,
        } = this.state;

        const { auth, router, cartTotal } = this.props;
        let pathname = router.pathname;
        return (
            <div className="navigation--list">
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.menuDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Account</h3>
                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            {auth.isLoggedIn == false ? (
                                <Login />
                            ) : (
                                <Invoices />
                            )}
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.cartDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Shopping Cart</h3>
                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            <PanelCartMobile />
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.searchDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Search</h3>
                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            <PanelSearch />
                        </div>
                    </div>
                </Drawer>
                <Drawer
                    className="ps-panel--mobile"
                    placement="right"
                    closable={false}
                    onClose={this.handleDrawerClose}
                    visible={this.state.categoriesDrawer}>
                    <div className="ps-panel--wrapper">
                        <div className="ps-panel__header">
                            <h3>Categories</h3>
                            <span
                                className="ps-panel__close"
                                onClick={this.handleDrawerClose}>
                                <i className="icon-cross"></i>
                            </span>
                        </div>
                        <div className="ps-panel__content">
                            <PanelCategories />
                        </div>
                    </div>
                </Drawer>
                <div className="navigation__content">
                    <Link
                        href={
                            auth.isLoggedIn == false
                                ? '/account/login'
                                : '/account/invoices'
                        }>
                        <a className="navigation__item">
                            <i className="icon-user"></i>
                            <span> Account</span>
                        </a>
                    </Link>
                    <a
                        className={`navigation__item ${
                            categoriesDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowCategoriesDrawer}>
                        <i className="icon-list4"></i>
                        <span> Categories</span>
                    </a>
                    {/* <a
                        className={`navigation__item ${
                            searchDrawer === true ? 'active' : ''
                        }`}
                        onClick={this.handleShowSearchDrawer}>
                        <i className="icon-magnifier"></i>
                        <span> Search</span>
                    </a> */}
                    {pathname != '/account/checkout' &&
                    pathname != '/account/shipping' ? (
                        <a
                            className={`navigation__item ${
                                cartDrawer === true ? 'active' : ''
                            }`}
                            onClick={this.handleShowCartDrawer}>
                            <i className="icon-bag2"></i>
                            <span className="cart-nums">
                                <i className="num">{cartTotal ? cartTotal : 0}</i>
                            </span>
                            <span> Cart</span>
                        </a>
                    ) : (
                        <a
                            className={`navigation__item ${
                                cartDrawer === true ? 'active' : ''
                            }`}
                            disabled>
                            <i className="icon-bag2"></i>
                            <span className="cart-nums">
                                <i className="num">{cartTotal ? cartTotal : 0}</i>
                            </span>
                            <span> Cart</span>
                        </a>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth, setting: state.setting, cartTotal: state.cart.cartTotal };
};
export default withRouter(connect(mapStateToProps)(NavigationList));
