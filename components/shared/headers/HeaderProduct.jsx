import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import NavigationDefault from '../navigation/NavigationDefault';
import HeaderActions from './modules/HeaderActions';
import MenuCategories from './modules/MenuCategories';
import SearchHeader from './modules/SearchHeader';
import { addItem } from '../../../store/cart/action';
import { stickyHeader } from '../../../utilities/common-helpers';
import { isStaticData } from '../../../utilities/app-settings';
import { baseUrl } from '../../../repositories/Repository';

class HeaderProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    componentDidMount() {
        if (process.browser) {
          // window.addEventListener('scroll', stickyHeader);
        }
    }

    handleAddItemToCart = (e) => {
        e.preventDefault();
        const { productData } = this.props;
        let tempProduct = productData;
        tempProduct.quantity = this.state.quantity;
        this.props.dispatch(addItem(productData));
    };

    handleScroll = () => {
        // let number =
        //     window.pageXOffset ||
        //     document.documentElement.scrollTop ||
        //     document.body.scrollTop ||
        //     0;

        // if (number >= 300) {
        //     document
        //         .getElementById('headerSticky')
        //         .classList.add('header--sticky');
        // } else {
        //     document
        //         .getElementById('headerSticky')
        //         .classList.remove('header--sticky');
        // }
    };

    render() {
        const { productData } = this.props;
        const { singleProduct } = this.props;
        return (
            <header
                className="header header--1 header--product"
                // data-sticky="true"
                id="headerSticky">
                <div className="header__top">
                    <div className="ps-container">
                        <div className="header__left">
                            <div
                                className="menu--product-categories"
                                style={{ display: 'block' }}>
                                <div
                                    className="menu__toggle"
                                    style={{ display: 'block' }}>
                                    <i
                                        className="icon-menu"
                                        style={{ fontSize: '30px' }}></i>
                                </div>
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
                                <span>
                                    <Link href="/">
                                        <img
                                            src="/static/img/logo_light.png"
                                            alt="MadeInIndiaGifts.in"
                                        />
                                    </Link>
                                </span>
                                <div className="menu__content">
                                    <MenuCategories />
                                </div>
                            </div>
                            {/* <div className="menu--product-categories">
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
                            </div> */}
                        </div>
                        <div className="header__center">
                            <SearchHeader />
                        </div>
                        <div className="header__right">
                            <HeaderActions />
                        </div>
                    </div>
                </div>
                <nav className="navigation navigation--product" style={{display: 'none'}}>
                    <div className="container">
                        <article className="ps-product--header-sticky">
                            <div className="ps-product__thumbnail">
                                <img
                                    src={
                                        isStaticData === false
                                            ? '/static/img/products/detail/image-swatches/small-2.jpg'
                                            : '/static/img/products/detail/image-swatches/small-2.jpg'
                                    }
                                    alt="MadeInIndiaGifts.in"
                                />
                            </div>
                            <div className="ps-product__wrapper">
                                <div className="ps-product__content">
                                    <Link
                                        href="/product/[pid]"
                                        as={`/product/${singleProduct.id}`}>
                                        <a className="ps-product__title">
                                            {singleProduct.title}
                                        </a>
                                    </Link>
                                </div>
                                <div className="ps-product__shopping">
                                    {singleProduct.sale === true ? (
                                        <span className="ps-product__price">
                                            <span>
                                                ₹{singleProduct.bestPrice}
                                            </span>
                                            <del>
                                                ₹{singleProduct.salePrice}
                                            </del>
                                        </span>
                                    ) : (
                                        <span className="ps-product__price">
                                            <span>
                                                ₹{singleProduct.bestPrice}
                                            </span>
                                        </span>
                                    )}
                                    <a
                                        className="ps-btn"
                                        href="#"
                                        onClick={(e) =>
                                            this.handleAddItemToCart(e)
                                        }>
                                        Add to Cart
                                    </a>
                                </div>
                            </div>
                        </article>
                    </div>
                </nav>
            </header>
        );
    }
}
export default connect((state) => state.product)(HeaderProduct);
