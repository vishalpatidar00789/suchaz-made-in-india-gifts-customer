import React, { FC } from 'react';
import { BeatLoader } from 'react-spinners';
import { css as emtionCSS } from '@emotion/core';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
    PageOpenLoaderSectionLeft,
    PageOpenLoaderSectionRight,
    PageOpenLoaderWrapper,
    Spinner,
} from './loader.style';

// const configPageLoaderCSS = emtionCSS`
//     position: fixed !important;
//     top: 50% !important;
//     left: calc(50% - 35px) !important;
// `;

type LoaderProps = {
    type: string;
    color?: string;
    loading?: boolean;
};

const Loader: FC<LoaderProps> = ({ type, color, loading }) => {
    const themeContext = useContext(ThemeContext);
    switch (type) {
        case 'page-open-loader':
            return (
                <PageOpenLoaderWrapper loaded={loading}>
                    <PageOpenLoaderSectionLeft></PageOpenLoaderSectionLeft>
                    <PageOpenLoaderSectionRight></PageOpenLoaderSectionRight>
                </PageOpenLoaderWrapper>
            );
            break;
        case 'page-loader':
            return (
                <BeatLoader
                    margin={4}
                    size={25}
                    color={themeContext.colors.primary.regular}
                    loading={loading}
                />
            );
            break;
        case 'spinner':
            return <Spinner color={color} />;

        default:
            return (
                <BeatLoader
                    margin={4}
                    size={25}
                    color={themeContext.colors.primary.regular}
                    loading={loading}
                />
            );
    }
};

export default Loader;
