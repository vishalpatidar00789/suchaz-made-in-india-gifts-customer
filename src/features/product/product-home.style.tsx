import { hiddenMixin, listResetMixin, showMixin } from 'assets/styles/mixins.style';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const ProductHomeButtonWrapper = styled.div`
    display: flex;
    padding-bottom: 10px;
    .dark {
        background: none;
    }
    .flexbtn {
        justify-content: center;
        width: 50%;
        display: inline-flex;
        float: left;
    }

    a.bttn {
        color: ${themeGet('colors.headingsColor', '#0D1136')};
        text-decoration: none;
        transition: 0.3s ease all;
        &:hover {
            color: ${themeGet('colors.white', '#fff')};
        }
        &:focus {
            color: ${themeGet('colors.white', '#fff')};
        }
    }

    a.bttn-dark {
        color: ${themeGet('colors.majorColor', '#c3404e')};
        text-decoration: none;
        transition: 0.3s ease all;
        &:hover {
            color: ${themeGet('colors.white', '#fff')};
        }
        &:focus {
            color: ${themeGet('colors.white', '#fff')};
        }
    }

    .bttn {
        font-size: 14px;
        display: inline-block;
        text-align: center;
        width: 100%;
        margin: 2px;
        font-weight: normal;
        padding: 5px 5px;
        border: 2px solid ${themeGet('colors.headingsColor', '#0D1136')};
        border-radius: 2px;
        position: relative;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
        &:before {
            transition: 0.5s all ease;
            position: absolute;
            top: 0;
            left: 50%;
            right: 50%;
            bottom: 0;
            opacity: 0;
            content: '';
            background-color: ${themeGet('colors.headingsColor', '#0D1136')};
            z-index: -2;
        }
        &:hover {
            &:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
            }
        }
        &:focus {
            &:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
            }
        }
    }

    .bttn {
        font-size: 14px;
    }
    .bttn-dark {
        font-size: 14px;
    }
    .bttn-dark {
        font-size: 14px;
        display: inline-block;
        text-align: center;
        margin: 2px;
        width: 100%;
        font-weight: normal;
        padding: 5px 5px;
        border: 2px solid ${themeGet('colors.majorColor', '#c3404e')};
        border-radius: 2px;
        position: relative;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
        &:before {
            transition: 0.5s all ease;
            position: absolute;
            top: 0;
            left: 50%;
            right: 50%;
            bottom: 0;
            opacity: 0;
            content: '';
            background-color: ${themeGet('colors.majorColor', '#c3404e')};
            z-index: -2;
        }
        &:hover {
            &:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
            }
        }
        &:focus {
            &:before {
                transition: 0.5s all ease;
                left: 0;
                right: 0;
                opacity: 1;
            }
        }
    }

    @media (max-width: 1199px) {
        .bttn {
            font-size: 14px;
        }
        .bttn-dark {
            font-size: 14px;
        }
    }
    @media (max-width: 767px) {
        .bttn {
            font-size: 12px;
        }
        .bttn-dark {
            font-size: 12px;
        }
    }
    @media (max-width: 479px) {
        .bttn {
            font-size: 10px;
            padding: 2px 2px;
        }
        .bttn-dark {
            font-size: 10px;
            padding: 2px 2px;
        }
    }
`;
export const ProductHomeRating = styled.div`
    span {
        color: ${themeGet('colors.textColor', '#c3404e')};
    }
`;
export const ProductHomeContent = styled.div`
    .ps-product__price {
        color: #690;
        font-size: 18px;
        font-weight: 600;
        line-height: 100%;
        margin-bottom: 5px;
        position: relative;

        del {
            color: ${themeGet('colors.textColor', '#c3404e')};
            font-size: 14px;
        }
        small {
            margin-left: 0px;
            margin-top: 5px;
            color: red;
            display: block;
            font-size: 80%;
            line-height: 100%;
        }
    }

    .ps-product__title {
        margin: 0;
        display: block;
        padding: 0 0 5px;
        font-size: 14px;
        line-height: 1.2em;
        color: #06c;
        --max-lines: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* after 3 line show ... */
        -webkit-box-orient: vertical;
        max-height: calc(1.2em * var(--max-lines));
        overflow: hidden;
        padding-right: 1rem;
        height: 40px;
        &:hover {
            color: ${themeGet('colors.majorColor', '#c3404e')};
        }
    }
`;
export const ProductHomeContainer = styled.div`
    padding-top: 10px;

    .ps-product__vendor {
        display: block;
        padding-bottom: 8px;
        margin-bottom: 13px;
        line-height: 1.2;
        font-size: 12px;
        color: ${themeGet('colors.black', '#000000')};
        text-transform: uppercase;
        border-bottom: 1px solid #e1e1e1;
    }
`;
export const ProductHomeThumbnailContainer = styled.div`
    position: relative;
    overflow: hidden;
    img {
        height: 201px;
        width: 201px;
    }
`;
const ProductHomeWrapper = styled.div`
    position: relative;
    margin-right: 6px;
    margin-bottom: 5px;
    padding: 0;
    border: none;

    .ant-rate {
        .ant-rate-star {
            i {
                font-size: 12px !important;
            }
        }
    }
`;

export default ProductHomeWrapper;
