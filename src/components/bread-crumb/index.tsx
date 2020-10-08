import Link from 'next/link';
import React, { FC } from 'react';
import BreadCrumbWrapper, { BreadCrumbContainer, BreadCrumbList } from './bread-crumb.style';
import { IBreadCrumb } from './types';
type BreadCrumbProps = {
    breadCrumbList?: IBreadCrumb[];
};
const BreadCrumb: FC<BreadCrumbProps> = ({ breadCrumbList }) => {
    return (
        <BreadCrumbWrapper>
            <BreadCrumbContainer>
                <BreadCrumbList>
                    {breadCrumbList.map((item) => {
                        if (!item.url) {
                            return <li key={item.text}>{item.text}</li>;
                        } else {
                            return (
                                <li key={item.text}>
                                    <Link href={item.url}>
                                        <a>{item.text}</a>
                                    </Link>
                                </li>
                            );
                        }
                    })}
                </BreadCrumbList>
            </BreadCrumbContainer>
        </BreadCrumbWrapper>
    );
};

export default BreadCrumb;
