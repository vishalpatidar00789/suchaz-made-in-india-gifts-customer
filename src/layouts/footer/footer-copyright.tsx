import Link from 'next/link';
import React, { FC } from 'react';
import { FooterCopyrightWrapper } from './footer.style';
const FooterCopyright: FC = () => (
    <FooterCopyrightWrapper>
        <p>© 2020 MadeInIndiaGifts.in. All Rights Reserved</p>
        <p>
            <span>We are using safe payment with:</span>
            <a>
                <img src="/static/img/payment-method/payment-method_b3ab24.svg" alt="MadeInIndiaGifts.in" />
            </a>
            {/* <a href="#">
                <img src="/static/img/payment-method/1.jpg" alt="MadeInIndiaGifts.in" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/2.jpg" alt="MadeInIndiaGifts.in" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/3.jpg" alt="MadeInIndiaGifts.in" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/4.jpg" alt="MadeInIndiaGifts.in" />
            </a>
            <a href="#">
                <img src="/static/img/payment-method/5.jpg" alt="MadeInIndiaGifts.in" />
            </a> */}
        </p>
    </FooterCopyrightWrapper>
);
export default FooterCopyright;
