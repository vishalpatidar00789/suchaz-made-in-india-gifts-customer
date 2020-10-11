import React, { FC } from 'react';
import { ThumbnailImageWrapper } from './thumbnail.style';
import { isStaticData } from 'utilities/app-settings';
type ThumbnailProps = {
    url: string;
};
const ThumbnailImage: FC<ThumbnailProps> = ({ url }) => (
    <ThumbnailImageWrapper>
        <img src={isStaticData === false ? url : url} alt="MadeInIndiaGifts.in" />
    </ThumbnailImageWrapper>
);

export default ThumbnailImage;
