import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';
import { connect } from 'react-redux';
import { getMenus } from '../../../store/collection/action';


class NavigationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
        };
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { menuData1 } = this.state;
        const { menuData } = this.props;
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span>Gift by Category</span>
                            </div>
                            <div className="menu__content">
                                <Menu
                                    data={(menuData.category) ? menuData.category : []}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="navigation__right">
                        <Menu data={(menuData.menuList) ? menuData.menuList : []} className="menu" />
                        <ul className="navigation__extra">
                            <li>
                                <Link href="/account/vendor/register">
                                    <a> Become a seller !</a>
                                </Link>
                            </li>
                        </ul>
                        {/* <ul className="navigation__extra">
                            <li>
                                <Link href="/vendor/become-a-vendor">
                                    <a>Sell on Martfury</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/order-tracking">
                                    <a>Tract your order</a>
                                </Link>
                            </li>
                            <li>
                                <CurrencyDropdown />
                            </li>
                            <li>
                                <LanguageSwicher />
                            </li>
                        </ul> */}
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return state.collection;
};
export default connect(mapStateToProps)(NavigationDefault);
