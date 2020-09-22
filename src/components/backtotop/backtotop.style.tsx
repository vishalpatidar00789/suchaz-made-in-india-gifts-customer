import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BacktoTopDiv = styled.div`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    z-index: 10000;
    background-color: transparent;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    /* @include transition(all 0.5s ease);
    @include box-shadow(0 0 3px 0 rgba(0, 0, 0, 0.2));
    @include transition(all 0.4s ease);

    i {
        @include center();
        z-index: 10001;
        font-size: 16px;
        color: ${themeGet(
        'colors.miig.text.regular',
        '#c3404e'
    )};
    }

    &:hover {
        cursor: pointer;
        background-color: #fff;
        border-color: #fff;
        box-shadow: 0 0 10px 2px
            rgba(${themeGet(
        'colors.miig.primary.regular',
        '#c3404e'
    )}, 0.5);
        i {
            color: ${themeGet(
        'colors.miig.primary.regular',
        '#c3404e'
    )};
        }
    }

    @include media('<lg') {
        display: none;
    } */
`;