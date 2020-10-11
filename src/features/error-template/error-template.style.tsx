import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const ErrorSectionContent = styled.div`
    img {
        margin-bottom: 100px;
    }

    h3 {
        margin-bottom: 20px;
        font-size: 36px;
        color: ${themeGet('colors.headingsColor', '#0D1136')};
        font-weight: 600;
    }

    p {
        margin-bottom: 20px;
        font-size: 18px;

        a {
            color: ${themeGet('colors.majorColor', '#c3404e')};
        }
    }

    @media (max-width: 767px) {
        h3 {
            font-size: 24px;
        }
        p {
            font-size: 14px;
        }
    }
`;

export const ErrorContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
`;

const ErrorPageWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    background-color: #efeef0;
    text-align: center;
`;

export default ErrorPageWrapper;
