import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const ProductDetatilHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }

    @media (max-width: 767px) {
        flex-flow: column wrap;
    }
`;
const ProductDetatilWrapper = styled.div`
    margin-bottom: 5rem;
    /* h1 {
        margin-bottom: 10px;
        font-size: 24px;
        color: #000;
        font-weight: 400;
        line-height: 1.2;
    }

    @media (max-width: 991px) {
        ${ProductDetatilHeader} {
            .ps-product__thumbnail {
                padding-right: 0;
            }

            .ps-product__info {
                padding-left: 3rem;
            }
        }
    }

    @media (max-width: 767px) {
        h1 {
            font-size: 2.4rem;
        }
        ${ProductDetatilHeader} {
            flex-flow: column wrap;

            .ps-product__thumbnail {
                max-width: 100%;
                margin-bottom: 3rem;
            }

            .ps-product__info {
                width: 100%;
                padding-left: 0;
                max-width: 100%;
            }
        }
    } */
`;

export default ProductDetatilWrapper;
