import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const RatingWrapper = styled.span`
    margin-right: 0.5em;
    display: inline-block;
    i {
        margin-right: 0.5em;
        &.fa-star {
            color: ${themeGet('colors.warning', '#faa806')};
        }
        &.fa-star-o {
            color: #999;
        }
        &.fa-star-half-o {
            color: ${themeGet('colors.warning', '#faa806')};
        }
        &:last-child {
            margin-right: 0;
        }
    }

    .ant-rate {
        .ant-rate-star {
            i {
                font-size: 12px !important;
            }
        }
    }
`;

export default RatingWrapper;
