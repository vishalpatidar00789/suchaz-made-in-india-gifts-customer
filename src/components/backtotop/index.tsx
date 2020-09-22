import React, { FC, useState } from 'react';
import { BacktoTopDiv } from './backtotop.style';

type BackProps = {
    scrollStepInPx?: number;
    delayInMs?: string;
};

const BacktoTop: FC<BackProps> = ({ scrollStepInPx, delayInMs }) => {
    const [intervalId, setintervalId] = useState(0);
    const scrollStep = () => {
        if (process.browser) {
            if (window.pageYOffset === 0) {
                clearInterval(intervalId);
            }
            window.scroll(0, window.pageYOffset - scrollStepInPx);
        }
    };

    const scrollToTop = () => {
        let intervalId = setInterval(scrollStep(), delayInMs);
        setintervalId(intervalId);
    };
    return (
        <BacktoTopDiv onClick={scrollToTop}>
            <i className="icon-chevron-up"></i>
        </BacktoTopDiv>
    );
};

export default BacktoTop;
