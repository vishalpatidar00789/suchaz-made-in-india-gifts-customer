import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { listResetMixin } from 'assets/styles/mixins.style';
export const FilterShopSectionList = styled.ul`
    li {
        position: relative;
        padding: 6px 20px 6px 0;

        a {
            display: block;
            line-height: 22px;
        }
    }
`;
export const FilterShopSection = styled.aside`
    position: relative;
    padding: 25px 20px;
    background-color: #f5f5f5;
    ${listResetMixin};
    margin-bottom: 20px;

    .widget-title {
        margin-bottom: 25px;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 400;
        color: ${themeGet('colors.headingsColor', '#0D1136')};
    }

    &:last-child {
        border-bottom: none;
    }

    figure {
        padding-bottom: 15px;
        padding-top: 15px;
        border-bottom: 1px solid #ccc;
        margin: 0;

        &:last-child {
            border-bottom: none;
        }
    }

    .ant-slider {
        .ant-slider-rail {
            background-color: #e4e4e4;
        }
    }
`;
const FilterShopWrapper = styled.div``;

export default FilterShopWrapper;
