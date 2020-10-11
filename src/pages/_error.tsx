import { NextPage } from 'next';
import React from 'react';
import ErrorTemplate from 'features/error-template';
import DefaultLayout from 'layouts/default-layout';
type Page = NextPage<ErrorProps> & { Layout?: React.FC };

type ErrorProps = {
    statusCode?: number | null | undefined;
};

const Error: Page = ({ statusCode }) => <ErrorTemplate statusCode={statusCode} />;

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

export default Error;
