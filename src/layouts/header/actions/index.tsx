import React, { FC } from 'react';
import HeaderActionsWrapper from './header-actions.style';
import { useRouter } from 'next/router';
import CartMini from 'features/carts/cart-mini';
import AccountQuickLinks from './account-quick-links';
import { useSelector } from 'react-redux';
const HeaderActions: FC = () => {
    const router = useRouter();
    let pathname = router.pathname;
    const { compare, wishlist, auth } = useSelector((state) => state);
    return (
        <HeaderActionsWrapper>
            {/* <Link href="/account/compare">
            <a className="header__extra">
                <i className="icon-chart-bars"></i>
                <span>
                    <i>
                        {compare
                            ? compare.compareTotal
                            : compare.compareTotal}
                    </i>
                </span>
            </a>
        </Link>
        
        <Link href="/account/wishlist">
            <a className="header__extra">
                <i className="icon-heart"></i>
                <span>
                    <i>{wishlist.wishlistTotal}</i>
                </span>
            </a>
        </Link> */}
            {/* <Link href="/account/vendor/register">
                            <a className="text-white">
                                Become a Seller
                            </a>
                        </Link> */}
            {/* {pathname != '/account/checkout' &&
            pathname != '/account/shipping' ? (
                <MiniCart />
            ) : (
                ''
            )} */}
            {pathname != '/account/checkout' && pathname != '/account/shipping' ? <CartMini /> : ''}
            {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                <AccountQuickLinks isLoggedIn={true} />
            ) : (
                <AccountQuickLinks isLoggedIn={false} />
            )}
        </HeaderActionsWrapper>
    );
};

export default HeaderActions;
