import React, { Component } from 'react';
import Link from 'next/link';

class MenuDropdown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { menuData } = this.props;
        return (
            <li className={menuData ? 'menu-item-has-children dropdown' : ''}>
                <Link href={menuData.link} as={menuData.link}>
                    <a>{menuData.title}</a>
                </Link>

          
            </li>
        );
    }
}

export default MenuDropdown;
