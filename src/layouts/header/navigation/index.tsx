import React, { FC } from 'react';
import NavigationWrapper, {
    NavigationContainer,
    NavigationExtraWrapper,
    NavigationLeft,
    NavigationMenuWrapper,
    NavigationRight,
    NavigationToggle,
} from './navigation.style';
import { useSelector } from 'react-redux';
import MegaMenu from '../menu/mega-menu';
import Link from 'next/link';
import { MenuContentWrapper } from '../menu/menu.style';

const NavigationHeader: FC = () => {
    const { category, menuList } = useSelector(
        (state) => state.collection.menuData
    );
    return (
        <NavigationWrapper>
            <NavigationContainer>
                <NavigationLeft>
                    <NavigationMenuWrapper>
                        <NavigationToggle>
                            <i className="icon-menu"></i>
                            <span>Gift by Category</span>
                        </NavigationToggle>
                        <MenuContentWrapper>
                            <MegaMenu
                                data={category ? category : []}
                                className="menu--dropdown"></MegaMenu>
                        </MenuContentWrapper>
                    </NavigationMenuWrapper>
                </NavigationLeft>
                <NavigationRight>
                    <MegaMenu
                        data={menuList ? menuList : []}
                        className="menu"></MegaMenu>

                    <NavigationExtraWrapper>
                        <li>
                            <Link href="/account/vendor/register">
                                <a> Become a seller !</a>
                            </Link>
                        </li>
                    </NavigationExtraWrapper>
                </NavigationRight>
            </NavigationContainer>
        </NavigationWrapper>
    );
};
export default NavigationHeader;
