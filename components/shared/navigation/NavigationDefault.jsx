import React, { Component } from 'react';
import Link from 'next/link';
import { notification } from 'antd';
import Menu from '../../elements/menu/Menu';

import CurrencyDropdown from '../headers/modules/CurrencyDropdown';
import LanguageSwicher from '../headers/modules/LanguageSwicher';
import axios from 'axios';

class NavigationDefault extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
        };
    }

    async componentDidMount() {
        let self = this;
        setTimeout(async () => {
            const reponse = await axios
                .get('https://www.suchaz.com/apiv2/menu/list')
                .then((res) => {
                    return res.data;
                })
                .catch((error) => ({ error: JSON.stringify(error) }));

            if (reponse.status == true) {
                self.setState({ menuData: reponse.data });
                console.log();
            }
        }, 200);
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        const { menuData } = this.state;
        return (
            <nav className="navigation">
                <div className="ps-container">
                    <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"></i>
                                <span> Shop by Category</span>
                            </div>
                            <div className="menu__content">
                                <Menu
                                    data={menuData}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="navigation__right">
                        <Menu
                            data={menuData}
                            className="menu"
                        />
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

export default NavigationDefault;
