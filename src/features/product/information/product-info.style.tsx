import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { centerMixin, verticalAlignMixin } from 'assets/styles/mixins.style';
export const ProductInfoActionMobileWrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 10003;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 72px;
    > * {
        flex-basis: 100%;
        text-align: center;
    }
    .ps-btn {
        border-radius: 0;
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: ${themeGet('colors.black', '#000000')};
        border: none;
        font-weight: 600;
        background-color: ${themeGet('colors.majorColor', '#c3404e')};
        transition: all 0.4s ease;
        cursor: pointer;

        &.ps-btn--black {
            color: ${themeGet('colors.white', '#fff')};
            background-color: ${themeGet('colors.black', '#000000')};
        }
    }

    @media (min-width: 1200px) {
        display: none;
    }
`;
export const ProductInfoShoppingWrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;
    padding-bottom: 30px;
    flex-flow: row nowrap;
    align-items: flex-end;
    // border-bottom: 1px solid #e1e1e1;
    border-bottom: 0px;

    > * {
        margin-right: 30px;
    }

    figure {
        margin-bottom: 0;
        margin-left: 0;
        margin-top: 0;
        figcaption {
            margin-bottom: 4px;
        }
    }

    .form-group--number {
        display: inline-block;
        position: relative;
        max-width: 115px;

        input {
            border-radius: 0;
            border-color: ${themeGet('colors.gray.800', '#f1f1f1')};
        }

        i {
            color: ${themeGet('colors.gray.800', '#f1f1f1')};
        }

        button {
            background: none;
            border: none;
            background-color: transparent;
            ${verticalAlignMixin()}
            width: 20px;
            height: 20px;
            max-width: 20px;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            color: ${themeGet('colors.majorColor', '#c3404e')};
            font-size: 20px;
            line-height: 1em;

            &.up {
                right: 10px;
            }

            &.down {
                left: 10px;
            }
        }

        .form-control {
            border: 1px solid #ccc;
            height: 40px;
            padding: 0 25px;
            text-align: center;
            font-size: 14px;
            color: ${themeGet('colors.headingsColor', '#0D1136')};
            background-color: transparent;
        }
    }

    .ps-btn {
        display: inline-block;
        padding: 15px 30px;
        font-size: 18px;
        font-weight: 600;
        line-height: 20px;
        vertical-align: top;
        max-height: 50px;
        color: ${themeGet('colors.white', '#fff')};
        border: none;
        font-weight: 600;
        border-radius: 4px;
        background-color: ${themeGet('colors.majorColor', '#c3404e')};
        transition: all 0.4s ease;
        cursor: pointer;
        :hover {
            background-color: ${themeGet('colors.black', '#000000')};
            color: ${themeGet('colors.white', '#fff')};
        }

        &.ps-btn--black {
            color: ${themeGet('colors.white', '#fff')};
            background-color: ${themeGet('colors.black', '#000000')};
            :hover {
                background-color: ${themeGet('colors.majorColor', '#c3404e')};
            }
        }
    }

    @media screen and (max-width: 1365px) {
        flex-flow: row wrap;
        figure,
        .ps-btn {
            margin-right: 10px;
        }
    }

    @media (max-width: 1679px) {
        flex-flow: row wrap;
        > * {
            margin-right: 10px;
        }

        .ps-btn {
            margin-right: 10px;
            text-align: center;
        }
    }

    @media (max-width: 991px) {
        .form-group--number {
            max-width: 100px;
        }
    }
    @media (max-width: 479px) {
        display: block;

        > * {
            margin-bottom: 0.5em;
        }

        figure {
            margin-bottom: 0.5em;
            width: 100%;

            .form-group--number {
                width: 100%;
                max-width: 100%;
            }
        }

        .ps-btn {
            width: 100%;
            margin-right: 0;
            display: none;
        }
    }

    @media (max-width: 375px) {
        .ps-form--number {
            max-width: 100%;
            width: 100%;
            margin-bottom: 1rem;
        }

        .ps-btn {
            padding-left: 20px;
            padding-right: 20px;
        }

        button {
            width: 100%;
        }
    }
`;
export const ProductInfoDescWrapper = styled.div`
    margin-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;

    p {
        color: ${themeGet('colors.headingsColor', '#0D1136')};

        a {
            text-transform: uppercase;
            font-weight: 600;
            color: #09c;
            font-size: 16px;
        }

        strong {
            font-weight: 600;
        }
    }

    .ps-tag--in-stock {
        font-size: 14px;
    }

    .ps-tag--out-stock {
        color: red;
        text-transform: none;
        font-size: 14px;
    }

    ul {
        list-style-type: none;

        li {
            color: #666;

            &:before {
                top: 6px;
                background-color: #999;
                width: 6px;
                height: 6px;
            }
        }
    }
`;
export const ProductInfoPriceWrapper = styled.h4`
    position: relative;
    margin-bottom: 12px;
    font-size: 24px;
    font-weight: 600;
    margin-top: 0;
    color: ${themeGet('colors.headingsColor', '#0D1136')};
    &.sale {
        color: #690;
        del {
            color: ${themeGet('colors.textColor', '#c3404e')};
            margin-right: 0;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
        }
    }
    small {
        font-weight: 500;
        display: block;
        color: red;
        font-size: 60% !important;
        margin: 5px 0px 0px 0px;
    }
`;
export const ProductInfoRatingWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    span {
        // margin-left: 10px;
        color: ${themeGet('colors.textColor', '#c3404e')};
    }
    .ps-review-num {
        margin-left: 5px;
    }
`;

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
