import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
    PageOpenLoaderSectionLeft,
    PageOpenLoaderSectionRight,
    PageOpenLoaderWrapper,
    LoadingArea,
    Spinner,
} from './loader.style';
import { ThreeBounce, Circle, FoldingCube } from 'styled-spinkit';

type LoaderProps = {
    type?: string;
    color?: string;
    loading?: boolean;
    disable?: boolean;
    spinnerType?: string;
};

const Loader: FC<LoaderProps> = ({ type, color, loading, disable, spinnerType }) => {
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
            return <>{loading ? <Spinner color={themeContext.colors.majorColor} /> : null}</>;
        case 'multi-slide-loader':
            return <>{loading ? <Circle size={75} color={themeContext.colors.majorColor} /> : null}</>;
        default:
            let loaderContent: React.ReactNode;
            switch (spinnerType) {
                case 'ThreeBounce':
                    loaderContent = <ThreeBounce size={75} color={themeContext.colors.majorColor} />;
                    break;
                case 'FoldingCube':
                    loaderContent = <FoldingCube size={75} color={themeContext.colors.majorColor} />;
                    break;
                default:
                    loaderContent = <ThreeBounce size={75} color={themeContext.colors.majorColor} />;
                    break;
            }

            return <>{loading ? <LoadingArea>{loaderContent}</LoadingArea> : null}</>;
    }
};

export default Loader;
