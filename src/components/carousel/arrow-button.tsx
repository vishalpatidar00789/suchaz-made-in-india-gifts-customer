import React, { FC } from 'react';
import { ArrowStyledButton } from './arrow-button.style';

type ArrowButtonProps = {
    directionType: string;
    className?: string;
    icon?: string;
    onClick?: (e: any) => void;
};
const ArrowButton: FC<ArrowButtonProps> = ({ directionType, className, icon, onClick }) => {
    return (
        <ArrowStyledButton directionType={directionType} onClick={onClick}>
            {icon ? <i className={icon}></i> : <i className="icon-circle"></i>}
        </ArrowStyledButton>
    );
};

export default ArrowButton;
