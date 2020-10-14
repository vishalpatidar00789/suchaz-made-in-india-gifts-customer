import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const ProductVendorWrapper = styled.div`
    h4 {
        font-size: 18px;
        position: relative;
        color:${themeGet('colors.headingsColor', '#0D1136')};
        margin-top: 0;
        margin-bottom: 10px;
        font-weight: 700;
    }
`;

export default ProductVendorWrapper;
