import React, { useEffect, FC } from 'react';
import HeaderMobileProductWrapper, {
    HeaderMobileProductContainer,
    HeaderMobileProductTop,
    HeaderMobileProductTopLeft,
    HeaderMobileProductTopRight,
} from './header-mobile-product.style';
import Link from 'next/link';
import HeaderMobileActions from '../actions/header-actions-mobile';

const HeaderMobileProduct: FC = () => {
    return (
        <HeaderMobileProductWrapper>
            <HeaderMobileProductContainer>
                <HeaderMobileProductTop>
                    <HeaderMobileProductTopLeft>
                        <Link href="/">
                            <a href="/" className="header__back">
                                <i className="icon-chevron-left"></i>
                                <strong>Back</strong>
                            </a>
                        </Link>
                    </HeaderMobileProductTopLeft>
                    <HeaderMobileProductTopRight>
                        <HeaderMobileActions />
                    </HeaderMobileProductTopRight>
                </HeaderMobileProductTop>
            </HeaderMobileProductContainer>
        </HeaderMobileProductWrapper>
    );
};

export default HeaderMobileProduct;
