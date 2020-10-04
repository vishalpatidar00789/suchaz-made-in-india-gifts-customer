import { verticalAlignMixin } from 'assets/styles/mixins.style';
import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import Slider from 'react-slick';

export const ArrowStyledButton = styled.button<{ directionType: string }>`
    ${verticalAlignMixin()};
    width: 40px;
    height: 40px;
    border: none !important;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0;
    z-index: 100;
    transition: all 0.4s ease;
    i {
        font-size: 16px;
    }
    &:hover {
        background-color: ${themeGet('colors.majorColor', '#c3404e')};
    }
    ${({ directionType }) =>
        directionType === 'next' &&
        css`
            right: 0;
        `}
    ${({ directionType }) =>
        directionType === 'prev' &&
        css`
            left: 0;
        `}
`;

export const StyledSlider = styled(Slider)`
    position: relative;
    padding-right: 2px;
    .slick-list {
        padding-right: 3px !important;
    }
    .slick-dots {
        margin: 0;
        padding: 0;
        width: 100%;
        list-style-type: none;
        text-align: center;
        > li {
            display: inline-block;
            margin-right: 10px;
            vertical-align: top;
            button {
                display: block;
                vertical-align: top;
                padding: 0;
                font-size: 0;
                border-radius: 0;
                border: none;
                width: 10px;
                height: 10px;
                background-color: rgba(#000, 0.3);
                border-radius: 50%;
            }
            &:last-child {
                margin-right: 0;
            }
            &.slick-active {
                button {
                    background-color: ${themeGet('colors.majorColor', '#c3404e')};
                }
            }
        }
    }

    &.blur {
        ${ArrowStyledButton} {
            background-color: rgba(#ccc, 0.5);
            &:hover {
                background-color: ${themeGet('colors.majorColor', '#c3404e')};
            }
        }
    }
`;

export const HomeSlider = styled(StyledSlider)`
    @media screen and (min-width: 1440px) {
        ${ArrowStyledButton} {
            display: none;
        }
    }
`;
