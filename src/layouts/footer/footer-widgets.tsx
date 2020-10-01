import Link from 'next/link';
import React, { FC } from 'react';
import {
    FooterWidgetsWrapper,
    FooterWidgetsContactContainer,
    FooterWidgetsContainer,
    FooterWidgetsContent,
    FooterWidgetsLink,
} from './footer.style';
const FooterWidgets: FC = () => (
    <FooterWidgetsWrapper>
        <FooterWidgetsContactContainer>
            <h4 className="widget-title">Contact us</h4>
            <FooterWidgetsContent>
                <p>
                    Email : <a href="mailto:neelesh@madeinindiagifts.in">neelesh@madeinindiagifts.in </a>
                </p>
            </FooterWidgetsContent>
        </FooterWidgetsContactContainer>
        <FooterWidgetsContainer>
            <h4 className="widget-title">Quick links</h4>
            <FooterWidgetsLink>
                <li>
                    <Link href="/page/privacy-policy">
                        <a>Privacy Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/terms-and-conditions">
                        <a>Terms & Conditions</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/blank">
                        <a>Seller Term & Condition</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/page/disclaimer">
                        <a>Disclaimer</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/payments-and-logistics">
                        <a>Payments & Logistics</a>
                    </Link>
                </li>

                <li>
                    <Link href="/page/returns-policy">
                        <a>Refund, Return & Cancellation Policy</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/faqs">
                        <a>FAQs</a>
                    </Link>
                </li> */}
            </FooterWidgetsLink>
        </FooterWidgetsContainer>
        <FooterWidgetsContainer>
            <h4 className="widget-title">Company</h4>
            <FooterWidgetsLink>
                <li>
                    <Link href="/page/about-us">
                        <a>Our story</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/blank">
                        <a>Affilate</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Career</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/page/contact-us">
                        <a>Contact Us</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/page/contact-us">
                        <a>Blog</a>
                    </Link>
                </li> */}
            </FooterWidgetsLink>
        </FooterWidgetsContainer>
        <FooterWidgetsContainer>
            <FooterWidgetsContainer>
                <h4 className="widget-title">Business</h4>
                <FooterWidgetsLink>
                    <li>
                        <Link href="/account/vendor/register">
                            <a>Become a Seller</a>
                        </Link>
                    </li>
                    {/* <li>
                    <Link href="/page/about-us">
                        <a>Our Press</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/checkout">
                        <a>Checkout</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>My Account</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>Become a Reviewer</a>
                    </Link>
                </li> */}
                </FooterWidgetsLink>
            </FooterWidgetsContainer>
        </FooterWidgetsContainer>
    </FooterWidgetsWrapper>
);
export default FooterWidgets;
