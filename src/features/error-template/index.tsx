import DefaultLayout from 'layouts/default-layout';
import Link from 'next/link';
import React, { FC } from 'react';
import ErrorPageWrapper, { ErrorContainer, ErrorSectionContent } from './error-template.style';
type ErrorTemplateProps = {
    statusCode?: number | null | undefined;
};
const ErrorTemplate: FC<ErrorTemplateProps> = ({ statusCode }) => {
    return (
        <ErrorPageWrapper>
            <ErrorContainer>
                <ErrorSectionContent>
                    <figure>
                        <img src="/static/img/404.jpg" alt="" />
                        <h3>Ohh! Page not 123</h3>
                        <p>
                            It seems we can't find what you're looking for. <br />
                            Go back to
                            <Link href="/">
                                <a> Homepage</a>
                            </Link>
                        </p>
                    </figure>
                </ErrorSectionContent>
            </ErrorContainer>
        </ErrorPageWrapper>
    );
};
export default ErrorTemplate;
