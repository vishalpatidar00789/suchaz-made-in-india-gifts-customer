import React, { FC } from 'react';
import { HeaderMobileActionsWrapper } from './header-actions.style';
import { useRouter } from 'next/router';
import AccountQuickLinksMobile from './account-quick-links-mobile';
import { useSelector } from 'react-redux';
import Link from 'next/link';
const HeaderMobileActions: FC = () => {
    const router = useRouter();
    let pathname = router.pathname;
    const { compare, wishlist, auth } = useSelector((state) => state);
    const { cartTotal } = useSelector((state) => state.cart);
    return (
        <HeaderMobileActionsWrapper>
            <Link href="/account/shopping-cart">
                <a className="header__extra" href="#">
                    <i className="icon-bag2"></i>
                    <span>
                        <i>{cartTotal ? cartTotal : 0}</i>
                    </span>
                </a>
            </Link>

            {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
                <AccountQuickLinksMobile />
            ) : (
                <div className="header__extra">
                    <Link href="/account/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
            )}
        </HeaderMobileActionsWrapper>
    );
};

export default HeaderMobileActions;
