import Link from 'next/link';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/action';
import {
    SignInHeaderLeft,
    SignInHeaderRight,
    SignInHeaderWrapper,
    UserHeaderContent,
    UserHeaderLinkList,
    UserHeaderWrapper,
} from './header-actions.style';
type AccountQuickProps = {
    isLoggedIn: boolean;
};
const AccountQuickLinks: FC<AccountQuickProps> = ({ isLoggedIn }) => {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logOut());
    };
    const accountLinks = [
        // {
        //     text: 'Account Information',
        //     url: '/account/user-information',
        // },
        // {
        //     text: 'Notifications',
        //     url: '/account/notifications',
        // },
        {
            text: 'Invoices',
            url: '/account/invoices',
        },
        // {
        //     text: 'Address',
        //     url: '/account/addresses',
        // },
        // {
        //     text: 'Recent Viewed Product',
        //     url: '/account/recent-viewed-product',
        // },
        // {
        //     text: 'Wishlist',
        //     url: '/account/wishlist',
        // },
    ];
    return (
        <>
            {isLoggedIn ? (
                <UserHeaderWrapper>
                    <i className="icon-user"></i>
                    <UserHeaderContent>
                        <UserHeaderLinkList>
                            {accountLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url}>
                                        <a>{link.text}</a>
                                    </Link>
                                </li>
                            ))}
                            <li className="ps-block__footer">
                                <a href="#" onClick={() => handleLogout(e)}>
                                    Logout
                                </a>
                            </li>
                        </UserHeaderLinkList>
                    </UserHeaderContent>
                </UserHeaderWrapper>
            ) : (
                <SignInHeaderWrapper>
                    <SignInHeaderLeft>
                        <i className="icon-user"></i>
                    </SignInHeaderLeft>
                    <SignInHeaderRight>
                        <Link href="/account/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/account/register">
                            <a>Register</a>
                        </Link>
                    </SignInHeaderRight>
                </SignInHeaderWrapper>
            )}
        </>
    );
};

export default AccountQuickLinks;
