import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
const ProductSpecWrapper = styled.div`
    .ps-table {
        thead {
            > tr {
                > th {
                    font-size: 18px;
                    font-weight: 700;
                    color: #515356;
                    text-transform: uppercase;
                    border-bottom: 1px solid #e5e5e5;
                }
            }
        }

        tbody {
            > tr {
                > td {
                    vertical-align: middle;
                    padding: 20px 30px;
                    border: 1px solid #ddd;
                    color: ${themeGet('colors.textColor', '#c3404e')};
                }
            }
        }
    }
    .ps-table--specification {
        tbody {
            tr {
                td {
                    &:first-child {
                        background-color: #f4f4f4;
                        font-weight: 500;
                        color: ${themeGet('colors.headingsColor', '#0D1136')};
                        width: 150px;
                    }
                }
            }
        }
    }

    @media (min-width: 1200px) {
        overflow-x: initial;
        padding-top: 0px;
    }
`;

export default ProductSpecWrapper;
