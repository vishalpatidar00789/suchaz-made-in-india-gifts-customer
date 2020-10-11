import React, { FC } from 'react';
import { PrevArrowStyledButton, NextArrowStyledButton } from './arrow-button.style';

type ArrowButtonProps = {
    directionType: string;
    className?: string;
    icon?: string;
    onClick?: (e: any) => void;
};
const ArrowButton: FC<ArrowButtonProps> = ({ directionType, className, icon, onClick }) => {
    let arrowContent = null;
    switch (directionType) {
        case 'next':
            arrowContent = (
                <NextArrowStyledButton onClick={onClick}>
                    {icon ? <i className={icon}></i> : <i className="icon-circle"></i>}
                </NextArrowStyledButton>
            );
            break;

        case 'prev':
            arrowContent = (
                <PrevArrowStyledButton onClick={onClick}>
                    {icon ? <i className={icon}></i> : <i className="icon-circle"></i>}
                </PrevArrowStyledButton>
            );
            break;
    }
    return arrowContent;
};

export default ArrowButton;
