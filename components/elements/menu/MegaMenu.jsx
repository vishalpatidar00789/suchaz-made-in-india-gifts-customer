import React, { Component } from 'react';

import Link from 'next/link';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { menuData } = this.props;
        return (
            <li
                className={
                    menuData.children
                        ? 'menu-item-has-children has-mega-menu'
                        : ''
                }>
                <div className="mega-menu">
                    <div className="mega-menu__column">
                        <ul className="mega-menu__list">
                            {menuData.children.map((megaSubItem, index) => (
                                <li key={index}>
                                    <Link href={megaSubItem.link}>
                                        <a>{megaSubItem.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </li>
        );
    }
}

export default Menu;
