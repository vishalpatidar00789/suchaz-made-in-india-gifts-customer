import React from 'react';
import Link from 'next/link';

import MegaMenu from './MegaMenu';
import MenuDropdown from './MenuDropdown';

const Menu = (props) => {
    const { data, className } = props;
    return (
        <ul className={className}>
            {data &&
                data.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={
                                item.children
                                    ? 'menu-item-has-children has-mega-menu'
                                    : ''
                            }>
                            <Link href={item.link} as={item.link}>
                                <a>{item.title}</a>
                            </Link>

                            <div className="mega-menu">
                                <div className="mega-menu__column">
                                    <ul className="mega-menu__list">
                                        {item.children &&
                                            item.children.map((item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link href={item.link} as={item.link}>
                                                            <a>{item.title}</a>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
};

export default Menu;
