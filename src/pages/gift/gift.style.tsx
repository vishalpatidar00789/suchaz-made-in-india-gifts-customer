import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GiftPageLayoutWrapper = styled.div`
    padding-top: 15px;
    padding-bottom: 90px;
    display: flex;
    flex-flow: row nowrap;

    > * {
        width: 100%;
    }

    .ps-layout__left {
        width: 100%;
        min-width: 320px;
        max-width: 310px;
        padding-right: 30px;
    }

    .ps-layout__right {
        max-width: calc(100% - 320px);
    }

    @media (max-width: 1199px) {
        flex-flow: column-reverse wrap;
        .ps-layout__left {
            max-width: 100%;
            padding-right: 0;
            // display: none;
        }
        .ps-layout__right {
            max-width: 100%;
            margin-bottom: 50px;
        }
    }

    @media (max-width: 767px) {
        padding-bottom: 45px;
    }
`;
const GiftPageWrapper = styled.div``;

export default GiftPageWrapper;
