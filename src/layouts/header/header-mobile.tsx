import React, { useEffect, FC } from 'react';
import HeaderMobileWrapper, {
    HeaderMobileContainer,
    HeaderMobileTop,
    HeaderMobileTopLeft,
    HeaderMobileTopRight,
} from './header-mobile.style';
import Link from 'next/link';

const HeaderMobile: FC = () => {
    return (
        <HeaderMobileWrapper>
            <HeaderMobileContainer>
                <HeaderMobileTop>
                    <HeaderMobileTopLeft>
                        <Link href="/">
                            <a className="ps-logo">
                                <img src="/static/img/logo_light.png" alt="MadeInIndiaGifts.in" />
                            </a>
                        </Link>
                    </HeaderMobileTopLeft>
                    <HeaderMobileTopRight>
                        <Link href="/account/vendor/register">
                            <a>Become a Seller</a>
                        </Link>
                    </HeaderMobileTopRight>
                </HeaderMobileTop>
            </HeaderMobileContainer>
        </HeaderMobileWrapper>
    );
};

export default HeaderMobile;
