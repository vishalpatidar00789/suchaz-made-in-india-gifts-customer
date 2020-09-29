import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import NavigationMobileWrapper, {
    NavigationMobileContainer,
    NavigationMobileContainerItem,
    NavigationMobileCartCount,
    NavigationMobileDrawerWrapper,
    NavigationMobileDrawerHeader,
    NavigationMobileDrawerContent,
    NavigationMobileDrawerClose,
} from './navigation-mobile.style';
import { withRouter } from 'next/router';
import { Drawer } from 'antd';
import PanelCategories from '../panel/panel-categories';
import PanelCart from '../panel/panel-cart';

type NavigationMobileProps = {
    router: any;
};

const NavigationMobileHeader: FC<NavigationMobileProps> = ({ router }) => {
    const [cartDrawer, setCartDrawer] = useState(false);
    const [categoriesDrawer, setCategoriesDrawer] = useState(false);
    const { cartTotal } = useSelector((state) => state.cart);
    const { auth } = useSelector((state) => state);
    let pathname = router.pathname;

    const handleShowCartDrawer = () => {
        setCartDrawer(!cartDrawer);
        setCategoriesDrawer(false);
    };

    const handleShowCategoriesDrawer = () => {
        setCartDrawer(false);
        setCategoriesDrawer(!categoriesDrawer);
    };

    const handleDrawerClose = () => {
        setCartDrawer(false);
        setCategoriesDrawer(false);
    };

    return (
        <>
            <NavigationMobileWrapper>
                <NavigationMobileContainer>
                    <Link href={auth.isLoggedIn == false ? '/account/login' : '/account/invoices'}>
                        <NavigationMobileContainerItem>
                            <i className="icon-user"></i>
                            <span> Account</span>
                        </NavigationMobileContainerItem>
                    </Link>
                    <NavigationMobileContainerItem isActive={categoriesDrawer} onClick={handleShowCategoriesDrawer}>
                        <i className="icon-list4"></i>
                        <span> Categories</span>
                    </NavigationMobileContainerItem>
                    {pathname != '/account/checkout' && pathname != '/account/shipping' ? (
                        <NavigationMobileContainerItem isActive={cartDrawer} onClick={handleShowCartDrawer}>
                            <i className="icon-bag2"></i>
                            <NavigationMobileCartCount>
                                <i className="num">{cartTotal ? cartTotal : 0}</i>
                            </NavigationMobileCartCount>
                            <span> Cart</span>
                        </NavigationMobileContainerItem>
                    ) : (
                        <NavigationMobileContainerItem isDisabled={true}>
                            <i className="icon-bag2"></i>
                            <NavigationMobileCartCount>
                                <i className="num">{cartTotal ? cartTotal : 0}</i>
                            </NavigationMobileCartCount>
                            <span> Cart</span>
                        </NavigationMobileContainerItem>
                    )}
                </NavigationMobileContainer>
            </NavigationMobileWrapper>
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={categoriesDrawer}>
                <NavigationMobileDrawerWrapper>
                    <NavigationMobileDrawerHeader>
                        <h3>Categories</h3>
                        <NavigationMobileDrawerClose onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </NavigationMobileDrawerClose>
                    </NavigationMobileDrawerHeader>
                    <NavigationMobileDrawerContent>
                        <PanelCategories />
                    </NavigationMobileDrawerContent>
                </NavigationMobileDrawerWrapper>
            </Drawer>
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={cartDrawer}>
                <NavigationMobileDrawerWrapper>
                    <NavigationMobileDrawerHeader>
                        <h3>Shopping Cart</h3>
                        <NavigationMobileDrawerClose onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </NavigationMobileDrawerClose>
                    </NavigationMobileDrawerHeader>
                    <NavigationMobileDrawerContent>
                        <PanelCart />
                    </NavigationMobileDrawerContent>
                </NavigationMobileDrawerWrapper>
            </Drawer>
        </>
    );
};
export default withRouter(NavigationMobileHeader);
