import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { ThreeBounce } from 'styled-spinkit';

// Spinner Styled component
const rotateSpinner = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.div<{ color: string }>`
    width: 24px;
    height: 24px;
    border: 4px solid ${themeGet('colors.white', '#ffffff')};
    border-top: 3px solid ${(props) => (props.color ? props.color : themeGet('colors.majorColor', '#c3404e'))};
    border-radius: 50%;
    transition-property: transform;
    animation-name: ${rotateSpinner};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;

// Bounce Loader Styled Components

export const LoadingArea = styled.div`
    position: fixed !important;
    top: 50% !important;
    left: calc(50% - 35px) !important;
    z-index: 9999;
    div:first-child {
        margin: 0 auto;
    }
`;

// Page loader Styled component
const rotatePageLoader = keyframes`
   100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
    }
`;
export const PageOpenLoaderWrapper = styled.div<{ loaded: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    overflow: hidden;
    img {
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
        -webkit-animation: ${rotatePageLoader} 1s linear infinite;
        -moz-animation: ${rotatePageLoader} 1s linear infinite;
        animation: ${rotatePageLoader} 1s linear infinite;
        z-index: 999999999;
    }

    /* After component loaded */
    ${(props) =>
        props.loaded &&
        css`
            visibility: hidden;
            transform: translateY(-100%);
            transition: all 0.3s 1s ease-out;
            img {
                opacity: 0;
                transition: all 0.3s ease-out;
            }
            ${PageOpenLoaderSectionLeft} {
                transform: translateX(-100%);
                transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
            ${PageOpenLoaderSectionRight} {
                transform: translateX(100%);
                transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            }
        `}
`;

export const PageOpenLoaderSection = styled.div`
    position: fixed;
    top: 0;
    width: 51%;
    height: 100%;
    background: ${themeGet('colors.white', '#fff')};
    z-index: 999;
`;

export const PageOpenLoaderSectionLeft = styled(PageOpenLoaderSection)`
    left: 0;
`;

export const PageOpenLoaderSectionRight = styled(PageOpenLoaderSection)`
    right: 0;
`;
