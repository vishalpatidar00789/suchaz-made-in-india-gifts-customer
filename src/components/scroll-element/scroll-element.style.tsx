import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { centerMixin } from '../../assets/styles/mixins.style';
import media from 'styled-media-query';

export const ScrollTopDiv = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    z-index: 10000;
    background-color: transparent;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;

    i {
        ${centerMixin()}
        font-size: 16px;
        z-index: 10001;
        font-size: 16px;
        color: ${themeGet('colors.textColor', '#c3404e')};
    }

    &:hover {
        cursor: pointer;
        background-color: ${themeGet('colors.white', '#fff')};
        border-color: ${themeGet('colors.white', '#fff')};
        box-shadow: 0 0 10px 2px rgba(${themeGet('colors.majorColor', '#c3404e')}, 0.5);
        i {
            color: ${themeGet('colors.majorColor', '#c3404e')};
        }
    }
    ${media.lessThan('large')`{
    display: none;
    `}
`;
