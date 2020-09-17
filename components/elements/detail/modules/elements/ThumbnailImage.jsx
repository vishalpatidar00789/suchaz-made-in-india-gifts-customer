import React from 'react';
import { isStaticData } from '../../../../../utilities/app-settings';

const ThumbnailImage = ({ url }) => (
    <img
        src={isStaticData === false ? url : url}
        alt="MadeInIndiaGifts.in"
    />
);

export default ThumbnailImage;
