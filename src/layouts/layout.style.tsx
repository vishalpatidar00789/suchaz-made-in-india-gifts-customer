import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const ProductLayoutWrapper = styled.div``;
export const MainLayoutWrapper = styled.div``;

export const DefaultLayoutWrapper = styled.div``;

const AppLayoutWrapper = styled.div<{ disable: boolean }>`
    ${(props) =>
        props.disable &&
        css`
            pointer-events: none;
            opacity: 0.2;
        `}
`;

export default AppLayoutWrapper;
