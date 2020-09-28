import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { hiddenMixin, showMixin } from 'assets/styles/mixins.style';

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
            color: ${themeGet('colors.text.bold', '#000')};
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
            color: ${themeGet('colors.text.bold', '#000')};

            &:before {
                display: none;
            }

            &:hover {
                color: ${themeGet('colors.primary.regular', '#009e7f')};
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
