import React, { FC } from 'react';
import {
    MenuWrapper,
    MenuToggle,
    MenuWrapperSticky,
    MenuContentWrapper,
} from './menu.style';
import Link from 'next/link';
import MegaMenu from './mega-menu';
import { useSelector } from 'react-redux';

const MenuDefault: FC = () => {
    const { category } = useSelector((state) => state.collection.menuData);
    return (
        <>
            <MenuWrapper>
                <MenuContentWrapper>
                    <MegaMenu
                        data={category ? category : []}
                        className="menu--dropdown"></MegaMenu>
                </MenuContentWrapper>
            </MenuWrapper>
            <Link href="/">
                <a className="ps-logo">
                    <img
                        src="/static/img/logo_light.png"
                        alt="MadeInIndiaGifts.in"
                    />
                </a>
            </Link>
            <MenuWrapperSticky>
                <MenuToggle>
                    <i className="icon-menu"></i>
                    <span>
                        <Link href="/">
                            <img
                                src="/static/img/logo_light.png"
                                alt="MadeInIndiaGifts.in"
                            />
                        </Link>
                    </span>
                </MenuToggle>
                <MenuContentWrapper>
                    <MegaMenu
                        data={category ? category : []}
                        className="menu--dropdown"></MegaMenu>
                </MenuContentWrapper>
            </MenuWrapperSticky>
        </>
    );
};
export default MenuDefault;
