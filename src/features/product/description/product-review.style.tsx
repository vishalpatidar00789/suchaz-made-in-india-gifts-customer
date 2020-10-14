import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { verticalAlignMixin } from 'assets/styles/mixins.style';
export const ProductReviewListWrapper = styled.div`
    margin-top: 40px;
    .woocommerce-Reviews-title {
        font-size: 16px;
        color: #000;
        font-weight: 500;
        margin: 0 0 40px;
        background-color: #f5f5f5;
        padding: 20px;
    }
    .verifiedPurchase {
        color: darkgreen;
        font-weight: 500;
    }
    ol.commentlist {
        padding: 0;
    }
    ol.commentlist {
        margin: 0;
        width: 100%;
        background: 0 0;
        list-style: none;
    }
    ol.commentlist::after,
    ol.commentlist::before {
        content: ' ';
        display: table;
    }
    ol.commentlist li:last-child {
        border-bottom: none;
    }
    ol.commentlist::after {
        clear: both;
    }
    .commentlist > li::before {
        content: '';
    }
    ol.commentlist li img.avatar {
        float: left;
        position: relative;
        top: 0;
        left: 0;
        padding: 3px;
        width: 32px;
        height: auto;
        background: #ebe9eb;
        border: 1px solid #e4e1e3;
        margin: 0;
        box-shadow: none;
    }
    ol.commentlist li img.avatar {
        width: 60px;
        border: none;
        padding: 0;
        background-color: transparent;
        border-radius: 50%;
    }

    ol.commentlist li img.avatar {
        width: 60px;
        border: none;
        padding: 0;
        background-color: transparent;
        border-radius: 50%;
    }

    ol.commentlist li .comment-text {
        margin: 0 0 0 90px;
        border-radius: 0;
        padding: 0;
        border: none;
    }
    ol.commentlist li .comment-text::before {
        content: ' ';
        display: table;
    }
    .mf-rating {
        display: flex;
        align-items: center;
        margin-top: 0;
    }
    .mf-rating .count {
        display: none;
    }
    .mf-rating {
        display: flex;
        align-items: center;
        margin-top: 0;
    }
    ol.commentlist li .comment-text p.meta {
        font-size: 14px;
        color: #999;
        margin-bottom: 10px;
    }
    ol.commentlist li .comment-text .woocommerce-review__author {
        position: relative;
        padding-right: 13px;
        margin-right: 10px;
    }
    ol.commentlist li .comment-text p.meta .author-name {
        color: #0099cc;
    }
    ol.commentlist li .comment-text .woocommerce-review__author:after {
        position: absolute;
        top: 2px;
        right: 0;
        content: '';
        width: 1px;
        height: 12px;
        background-color: #a9a9a9;
    }
    ol.commentlist li .comment-text::after {
        clear: both;
    }
    ol.commentlist li .comment-text p {
        margin: 0 0 1em;
    }
`;
export const ProductReviewContainer = styled.div`
    h4 {
        margin-bottom: 20px;
        display: block;
        font-size: 16px;
        font-weight: 600;
        line-height: 1.2em;
        text-transform: uppercase;
    }

    p {
        sup {
            margin-left: 5px;
            color: ${themeGet('colors.red', '#c3404e')};
        }
    }

    .form-group {
        margin-bottom: 2.5rem;

        > label {
            margin-bottom: 1.5rem;
            font-weight: 400;
            color: #000000;
            line-height: 1em;
        }
    }

    .form-group__rating {
        display: flex;
        align-items: center;

        label {
            margin-bottom: 0;
            line-height: 20px;
            margin-right: 15px;
        }
    }

    .form-control {
        border-radius: 0;
    }

    .ps-btn {
        display: inline-block;
        padding: 15px 45px;
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        color: ${themeGet('colors.black', '#000000')};
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
    }
`;
export const ProductAvgRatingBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    width: 100%;
    max-width: 360px;

    > span {
        min-width: 40px;
        color: ${themeGet('colors.textColor', '#c3404e')};
    }

    .ps-progress {
        position: relative;
        height: 10px;
        width: 100%;
        max-width: 230px;
        background-color: #f1f1f1;

        span {
            ${verticalAlignMixin()}
            left: 0;
            height: 100%;
            background-color: #690;
        }
    }
`;
export const ProductAvgRatingHeader = styled.div`
    margin-bottom: 20px;

    h3 {
        font-size: 58px;
        font-weight: 500;
        color: #690;
        line-height: 1;
        position: relative;
        margin-top: 0;
        margin-bottom: 10px;
    }
    span {
        display: block;
        color: ${themeGet('colors.textColor', '#c3404e')};
    }
`;
const ProductReviewWrapper = styled.div``;
export default ProductReviewWrapper;
