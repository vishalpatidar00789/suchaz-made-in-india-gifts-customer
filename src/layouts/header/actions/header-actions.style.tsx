import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { centerMixin, hiddenMixin, showMixin } from 'assets/styles/mixins.style';

export const HeaderMobileActionsWrapper = styled.div`
    .header__extra {
        margin-right: 10px;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 42px;
        transition: all 0.4s ease;
        color: ${themeGet('colors.white', '#fff')};
        i {
            font-size: 30px;
            line-height: 42px;
        }
        span {
            background-color: ${themeGet('colors.black', '#000000')};
            position: absolute;
            bottom: 0;
            right: -6px;
            display: flex;
            justify-content: center;
            align-items: center;
            vertical-align: top;
            width: 20px;
            height: 20px;
            color: ${themeGet('colors.black', '#000000')};
            border-radius: 50%;

            i {
                font-size: 12px;
                font-style: normal;
                line-height: 1em;
                color: ${themeGet('colors.white', '#fff')};
                font-weight: 600;
            }
        }
        &:last-child {
            margin-right: 0;
        }
    }

    .ps-user--mobile {
        position: relative;
        display: inline-block;
        vertical-align: top;
        min-width: 40px;
        height: 40px;
        i {
            ${centerMixin()};
        }
    }
`;

export const SignInHeaderWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    text-align: left;
`;

export const SignInHeaderRight = styled.div`
    padding-left: 10px;

    a {
        display: block;
        font-weight: 700;
        line-height: 18px;
        color: ${themeGet('colors.white', '#fff')};
        &:hover {
            color: ${themeGet('colors.headingsColor', '#000')};
        }
    }
`;

export const SignInHeaderLeft = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    i {
        font-size: 30px;
        line-height: 1em;
        color: ${themeGet('colors.white', '#fff')};
    }
`;
export const UserHeaderContent = styled.div`
    position: absolute;
    min-width: 240px;
    right: 0;
    z-index: 30;
    padding-top: 10px;
    transform: translate(0 20px) scale3d(1, 1, 0);
    transition: all 0.4s ease;
    ${hiddenMixin};
`;

export const UserHeaderLinkList = styled.ul`
    li {
        a {
            padding-left: 0;
            color: ${themeGet('colors.headingsColor', '#000')};

            &:before {
                display: none;
            }

            &:hover {
                color: ${themeGet('colors.majorColor', '#c3404e')};
            }
        }
    }

    .ps-block__footer {
        padding-top: 10px;
        margin-bottom: 0;
        border-top: 1px solid #eaeaea;
    }
`;

export const UserHeaderWrapper = styled.div`
    position: relative;

    i {
        font-size: 30px;
        line-height: 1em;
    }

    &:hover {
        ${UserHeaderContent} {
            ${showMixin};
            transform: translate(0 20px) scale3d(1, 1, 1);
            background-color: ${themeGet('colors.white', '#fff')};
            padding: 10px 15px;
        }
    }
`;

const HeaderActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > * {
        margin: 0 20px;
    }
`;

export default HeaderActionsWrapper;
