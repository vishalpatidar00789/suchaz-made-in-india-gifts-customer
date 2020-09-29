import React, { FC } from 'react';
import { ScrollTopDiv } from './scroll-element.style';
import { BackTop } from 'antd';

const ScrollTop: FC = () => (
    <BackTop>
        <ScrollTopDiv>
            <i className="icon-chevron-up"></i>
        </ScrollTopDiv>
    </BackTop>
);

export default ScrollTop;
