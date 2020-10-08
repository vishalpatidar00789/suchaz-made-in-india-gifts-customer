import Link from 'next/link';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import HomeTopCategoryWrapper, {
    HomeTopCategorySectionWrapper,
    HomeTopCategorySectionHeader,
    HomeTopCategorySectionHeaderBlock,
    HomeTopCategorySectionHeaderBlockLeft,
    HomeTopCategorySectionContent,
    HomeTopCategorySectionBlock,
} from './home-top-category.style';
const HomeTopCategory: FC = () => {
    const { menuList } = useSelector((state) => state.collection.menuData);
    const category = menuList;
    return (
        <>
            {category &&
                category.map((item, index) => (
                    <HomeTopCategoryWrapper key={index}>
                        <HomeTopCategorySectionWrapper>
                            <HomeTopCategorySectionHeader>
                                <HomeTopCategorySectionHeaderBlock>
                                    <HomeTopCategorySectionHeaderBlockLeft>
                                        <h3>{item.title}</h3>
                                    </HomeTopCategorySectionHeaderBlockLeft>
                                </HomeTopCategorySectionHeaderBlock>
                            </HomeTopCategorySectionHeader>
                            <HomeTopCategorySectionContent>
                                <div className="row">
                                    {item &&
                                        item.children.map((child, index) => (
                                            <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                                <HomeTopCategorySectionBlock>
                                                    <Link href={child.link} as={child.link}>
                                                        <a className="ps-block__overlay"></a>
                                                    </Link>
                                                    <img height="150" src={child.icon} alt="icon" />
                                                    <p>{child.title}</p>
                                                </HomeTopCategorySectionBlock>
                                            </div>
                                        ))}
                                </div>
                            </HomeTopCategorySectionContent>
                        </HomeTopCategorySectionWrapper>
                    </HomeTopCategoryWrapper>
                ))}
        </>
    );
};

export default HomeTopCategory;
