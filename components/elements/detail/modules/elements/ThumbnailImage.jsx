import React from 'react';
import { isStaticData } from '../../../../../utilities/app-settings';
import { baseUrl } from '../../../../../repositories/Repository';

const ThumbnailImage = ({ url }) => (
    <img
        src={isStaticData === false ? url : url}
        alt="martfury-image"
    />
);

export default ThumbnailImage;
