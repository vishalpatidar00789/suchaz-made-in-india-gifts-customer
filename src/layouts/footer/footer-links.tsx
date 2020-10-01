import Link from 'next/link';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { FooterLinksWrapper } from './footer.style';
const FooterLinks: FC = () => {
    const { menuList } = useSelector((state) => state.collection.menuData);
    return (
        <FooterLinksWrapper>
            {menuList &&
                menuList.map((item, index) => {
                    return (
                        <p key={index}>
                            <strong>{item.title} :</strong>
                            {item.children.map((itemx) => {
                                return (
                                    <Link href={itemx.link} key={itemx.title}>
                                        <a>{itemx.title}</a>
                                    </Link>
                                );
                            })}
                        </p>
                    );
                })}
        </FooterLinksWrapper>
    );
};
export default FooterLinks;
