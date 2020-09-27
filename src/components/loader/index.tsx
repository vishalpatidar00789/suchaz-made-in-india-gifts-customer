import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
    PageOpenLoaderSectionLeft,
    PageOpenLoaderSectionRight,
    PageOpenLoaderWrapper,
    LoadingArea,
    Spinner,
} from './loader.style';
import { ThreeBounce } from 'styled-spinkit';

type LoaderProps = {
    type?: string;
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
        case 'spinner':
            return (
                <>
                    {loading ? (
                        <Spinner color={themeContext.colors.primary.regular} />
                    ) : null}
                </>
            );
        default:
            return (
                <>
                    {loading ? (
                        <LoadingArea>
                            <ThreeBounce
                                size={75}
                                color={themeContext.colors.primary.regular}
                            />
                        </LoadingArea>
                    ) : null}
                </>
            );
    }
};

export default Loader;
