import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
    showMixin,
    verticalAlignMixin,
} from 'assets/styles/mixins.style';
import { MenuToggle, MenuWrapper } from '../menu/menu.style';

export const NavigationContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }

    max-width: 1650px;
    margin: 0 auto;
    padding: 0 15px;
    @media (max-width: 1680px) {
        padding: 0 30px;
        max-width: 100%;
    }
    @media (max-width: 479px) {
        padding: 0 15px;
    }
`;

export const NavigationLeft = styled.div`
    max-width: 260px;
`;

export const NavigationRight = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 35px;
`;

export const NavigationToggle = styled(MenuToggle)``;
export const NavigationMenuWrapper = styled(MenuWrapper)``;

export const NavigationExtraWrapper = styled.ul`
    > li {
        position: relative;
        display: inline-block;
        margin-right: 20px;
        padding-right: 20px;

        &:after {
            content: '';
            ${verticalAlignMixin()};
            right: 0;
            width: 2px;
            height: 15px;
            background-color: ${themeGet('colors.white', '#fff')};
        }

        a {
            color: ${themeGet('colors.white', '#fff')};
        }

        &:last-child {
            margin-right: 0;
            padding-right: 0;

            &:after {
                display: none;
            }
        }
    }

    .ps-dropdown {
        img {
            margin-right: 8px;
        }
    }
`;

const NavigationWrapper = styled.nav`
    background-color: ${themeGet('colors.primary.regular', '#009e7f')};
    transition: all 0.25s ease;
`;

export default NavigationWrapper;
