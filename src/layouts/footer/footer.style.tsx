import styled, { keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
export const FooterWidgetsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding-bottom: 35px;
`;
export const FooterContainer = styled.div`
    max-width: 1650px;
    margin: 0 auto;
    padding: 0 15px;
    @media (max-width: 1680px) {
        padding: 0 30px;
        max-width: 100%;
    }
    @media (max-width: 479px) {
        padding: 0 15px;
    }
`;
const FooterWrapper = styled.footer`
    padding-top: 40px;

    @media (max-width: 767px) {
        ${FooterWidgetsWrapper} {
            flex-flow: row wrap;

            > * {
                width: 100%;
                max-width: 25%;
            }

            .widget_contact-us {
                max-width: 100%;
                width: 100%;
            }
        }
    }

    @media (max-width: 479px) {
        ${FooterWidgetsWrapper} {
            > * {
                max-width: 50%;
                flex-basis: 50%;
            }
        }
        &__copyright {
            flex-flow: row wrap;
            text-align: center;

            p {
                display: block;
                width: 100%;

                span {
                    display: block;
                    padding-bottom: 10px;
                }
            }
        }
    }
`;

export default FooterWrapper;
