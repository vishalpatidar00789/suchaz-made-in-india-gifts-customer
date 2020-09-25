import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const LayoutWrapper = styled.div<{ disable: boolean }>`
    background-color: ${themeGet('colors.red', '#c3404e')};
    height: 2000px;
    ${(props) =>
        props.disable &&
        css`
            pointer-events: none;
            opacity: 0.4;
        `}
`;
