import React from 'react';
import { BeatLoader } from 'react-spinners';
import { css } from '@emotion/core';

const configCSS = css`
    position: absolute;
    top: 50%;
    left: calc(50% - 35px);
`;

const Loader = (props) => {
    return (
        <BeatLoader
            margin={4}
            size={25}
            color={'#c3404e'}
            loading={props.loading}
            css={configCSS}
        />
    );
};

export default Loader;
