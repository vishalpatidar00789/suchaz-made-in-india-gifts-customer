import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const ProductPageDetailContainer = styled.div`
    max-width: 1650px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-flow: row nowrap;
    width: 100%;

    > * {
        width: 100%;
    }

    @media (max-width: 479px) {
        padding: 0 15px;
    }

    @media (max-width: 1199px) {
        flex-flow: column wrap;
    }

    @media (max-width: 1680px) {
        padding: 0 30px;
        max-width: 100%;
    }
`;

export const ProductPageDetailWrapper = styled.div`
    padding-top: 30px;
`;
const ProductPageWrapper = styled.main``;

export default ProductPageWrapper;
