import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
    ArrowStyledButton,
    NextArrowStyledButton,
    PrevArrowStyledButton,
    StyledSlider,
} from 'components/carousel/arrow-button.style';
import { centerMixin, hiddenMixin, showMixin, verticalAlignMixin } from 'assets/styles/mixins.style';
export const ThumbnailImageWrapper = styled.div``;
export const ProductVariantSlider = styled(StyledSlider)`
    max-width: 60px;
    width: 100%;
    min-width: 60px;

    .item {
        margin-bottom: 10px;
        border: 1px solid #d9d9d9;
        cursor: pointer;

        img {
            opacity: 0.5;
            @include transition(all 0.4s ease);
        }

        &:last-child {
            margin-bottom: 0;
        }

        &.slick-current {
            border-color: ${themeGet('colors.majorColor', '#c3404e')};

            img {
                opacity: 1;
            }
        }

        &:hover {
            img {
                width: 100%;
                opacity: 1;
            }
        }
    }
    .slick-current {
        .item {
            border-color: ${themeGet('colors.majorColor', '#c3404e')};
            img {
                opacity: 1;
            }
        }
    }
`;
export const ProductGallerySlider = styled(StyledSlider)`
    ${ArrowStyledButton} {
        width: 35px;
        height: 35px;
        color: ${themeGet('colors.black', '#000000')};
        font-size: 18px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 4px;
        border: none;
        outline: none;
        box-shadow: 0 0 rgba(0, 0, 0, 0);
        ${hiddenMixin}
        i {
            ${centerMixin()}
        }

        ${PrevArrowStyledButton} {
            left: 20px;
        }
        ${NextArrowStyledButton} {
            left: 20px;
        }
        &:hover {
            background-color: ${themeGet('colors.majorColor', '#c3404e')};
            color: ${themeGet('colors.white', '#fff')};
        }
    }

    &:hover {
        .item {
            &:before {
                ${showMixin}
            }
        }

        ${ArrowStyledButton} {
            ${showMixin}
        }
    }
`;
const ThumbnailWrapper = styled.div<{ dataVertical: boolean }>`
    max-width: 43%;
    display: flex;
    flex-flow: row-reverse nowrap;
    align-content: flex-start;

    > * {
        width: 100%;
    }

    figure {
        margin: 0;
        position: relative;
        display: block;
        max-width: calc(100% - 60px);
        padding-left: 10px;
    }

    @media (max-width: 1199px) {
        flex-flow: column wrap;
        figure {
            margin-bottom: 30px;
            padding: 0;
            width: 100%;
            max-width: 100%;
        }
        ${ProductVariantSlider} {
            position: relative;
            padding: 0 40px;
            float: none;
            width: 100%;
            max-width: 100%;

            .item {
                border: none;
                margin-right: 10px;
                margin-bottom: 0;
            }

            ${ArrowStyledButton} {
                display: inline-block;
                ${verticalAlignMixin()}
                font-size: 16px;

                ${PrevArrowStyledButton} {
                    left: 0;
                }

                ${NextArrowStyledButton} {
                    right: 0;
                }
            }
        }
    }

    @media (max-width: 991px) {
        padding-right: 0;
    }

    @media (max-width: 767px) {
        max-width: 100%;
        margin-bottom: 3rem;
    }

    ${({ dataVertical }) =>
        !dataVertical &&
        css`
            flex-flow: row wrap;
            figure {
                max-width: 100%;
                padding-left: 0;
            }
            ${ProductGallerySlider} {
                margin-bottom: 10px;

                img {
                    width: 100%;
                }
            }
            ${ProductVariantSlider} {
                max-width: 100%;
                text-align: center;
                width: 100%;
                .slick-track {
                    width: 100% !important;
                }
                .slick-slide {
                    margin-bottom: 0;
                    margin-right: 10px;

                    &.slick-active {
                        &:last-child {
                            margin-right: 0;
                        }
                    }
                }

                .slick-list {
                    margin-right: -10px;
                }

                ${ArrowStyledButton} {
                    font-size: 20px;
                    line-height: 20px;
                    ${verticalAlignMixin()}

                    ${PrevArrowStyledButton} {
                        left: -20px;

                        i {
                            &:before {
                                content: '\f104';
                            }
                        }
                    }

                    ${NextArrowStyledButton} {
                        right: 0px;

                        i {
                            &:before {
                                content: '\f105';
                            }
                        }
                    }

                    &:hover {
                        i {
                            color: #000;
                        }
                    }
                }
            }
        `}
`;

export default ThumbnailWrapper;
