import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { verticalAlignMixin } from 'assets/styles/mixins.style';
export const ProductInfoMeta = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;

    p {
        position: relative;
        display: inline-block;
        margin-bottom: 0;
        margin-right: 10px;
        padding-right: 10px;
        line-height: 20px;

        a {
            color: #06c;
        }

        &:after {
            content: '';
            ${verticalAlignMixin()}
            right: 0;
            width: 1px;
            height: 14px;
            background-color: #cccccc;
        }
    }

    .ps-product__rating {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;

        span {
            color: ${themeGet('colors.textColor', '#c3404e')};
        }
        .ps-review-num {
            margin-left: 5px;
        }
    }
`;
const ProductInfoWrapper = styled.div`
    text-align: left;
    max-width: 57%;
    padding-left: 30px;

    h1 {
        margin-bottom: 10px;
        font-size: 24px;
        color: ${themeGet('colors.black', '#000000')};
        font-weight: 400;
        line-height: 1.2;
    }

    @media (max-width: 991px) {
        padding-left: 3rem;
    }
    @media (max-width: 767px) {
        width: 100%;
        padding-left: 0;
        max-width: 100%;
        h1 {
            font-size: 2.4rem;
        }
    }

    @media (max-width: 479px) {
        ${ProductInfoMeta} {
            p {
                float: none;
            }

            > a {
                display: block;
                float: none;
                padding-left: 0;
            }
        }
    }
`;

export default ProductInfoWrapper;
