import { css } from 'styled-components';

// export { default as mixins } from './mixins';
// export default {
//     transition: (properties, type = 'linear', time = '0.25s') => css`
//         transition: ${time} ${type};
//         transition-property: ${properties};
//         will-change: ${properties};
//     `,
//     disabledStyle: (disabled = false) => css`
//         opacity: ${disabled ? 0.6 : ''};
//         cursor: ${disabled && `default`};
//     `,
// };

// import { mixins } from '../theme'

// export const Wrapper = styled.div`
//     /* all of my standard styling */
//     ${mixins.transition('opacity')};
//     ${({ disabled }) => mixins.disabledStyle(disabled)};

const boxShadowMixin = css`
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
`;

const boxShadowMixinFunc = (top, left, blur, color, inset = false) => {
    return `box-shadow: ${
        inset ? 'inset' : ''
    } ${top}px ${left}px ${blur}px ${color};`;
};

// const StyledComp = styled.div`
//   ${boxShadowMixin}
//   ${boxShadowMixinFunc(0, 0, 4, 'rgba(0, 0, 0, 0.5)')}
// `;

export const transition = (width = null, height = null) => css`
    position: absolute;
    top: 50%;
    left: 50%;
`;

// @mixin center($width: null, $height: null) {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     @if not $width and not $height {
//         @include transform(translate(-50%, -50%));
//     } @else if $width and $height {
//         width: $width;
//         height: $height;
//         margin-top: -($width / 2);
//         margin-left: -($height / 2);
//     } @else if not $height {
//         margin-left: -($width / 2);
//         @include transform(translateY(-50%));
//         width: $width;
//     } @else {
//         margin-top: -($height / 2);
//         @include transform(translateX(-50%));
//         height: $height;
//     }
// }

export const sampleflexUnit = (
    amount,
    min,
    max,
    unit = 'vw',
    prop = 'font-size'
) => {
    const minBreakpoint = (min / amount) * 100;
    const maxBreakpoint = max ? (max / amount) * 100 : false;
    const dimension = unit === 'vw' ? 'width' : 'height';

    return `
      @media (max-${dimension}: ${minBreakpoint}px) {
        ${prop}: ${min}px;
      }
  
      ${
          max
              ? `
        @media (min-${dimension}: ${maxBreakpoint}px) {
          ${prop}: ${max}px;
        }
      `
              : ''
      }
  
      ${prop}: ${amount}${unit}
    `;
};

export const sampleCenterMixin = (width = null, height = null) => css`
    position: absolute;
    top: 50%;
    left: 50%;

    ${!width &&
    !height &&
    css`
        transform: translate(-50%, -50%);
    `}

    ${width &&
    height &&
    css`
        width: ${width};
        height: ${height};
        margin-top: -(${width} / 2);
        margin-left: -(${height} / 2);
    `}

        ${!height &&
    css`
        margin-left: -(${width} / 2);
        transform: translateY(-50%, -50%);
        width: ${width};
    `}
        ${!width &&
    css`
        margin-top: -(${height} / 2);
        transform: translateX(-50%, -50%);
        height: ${height};
    `}
`;

export const centerMixin = (width = null, height = null) => {
    const commonCSS = css`
        position: absolute;
        top: 50%;
        left: 50%;
    `;
    if (!width && !height) {
        return css`
            ${commonCSS}
            transform: translate(-50%, -50%);
        `;
    } else if (width && height) {
        return css`
            ${commonCSS}
            width: ${width};
            height: ${height};
            margin-top: -(${width} / 2);
            margin-left: -(${height} / 2);
        `;
    } else if (!height) {
        return css`
            ${commonCSS}
            margin-left: -(${width} / 2);
            transform: translateY(-50%, -50%);
            width: ${width};
        `;
    } else {
        return css`
            ${commonCSS}
            margin-top: -(${height} / 2);
            transform: translateX(-50%, -50%);
            height: ${height};
        `;
    }
};

export const listResetMixin = () => css`
    ul,
    ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }
`;

export const hiddenMixin = () => css`
    visibility: hidden;
    opacity: 0;
`;

export const showMixin = () => css`
    visibility: visible;
    opacity: 1;
`;

export const verticalAlignMixin = (position = 'absolute') => css`
    position: ${position};
    top: 50%;
    transform: translateY(-50%);
`;