import { Slider } from 'antd';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands, getProductCategories } from 'store/product/action';
import FilterShopWrapper, { FilterShopSection, FilterShopSectionList } from './filter-shop.style';

type FilterShopProps = {
    minPrice?: number;
    maxPrice?: number;
    minOffer?: number;
    maxOffer?: number;
    handleFilterProductsByCategory?: (e: any, id: any, title: any) => void;
    handleChangeRange?: (value: any) => void;
    handleChangeOffer?: (value: any) => void;
};
const FilterShop: FC<FilterShopProps> = ({
    minPrice,
    maxPrice,
    minOffer,
    maxOffer,
    handleFilterProductsByCategory,
    handleChangeRange,
    handleChangeOffer,
}) => {
    const dispatch = useDispatch();
    const { brands, categories } = useSelector((state) => state.product);
    useEffect(() => {
        dispatch(getBrands());
        dispatch(getProductCategories());
    }, []);

    // const handleRemoveCartItem = (product) => {
    //     dispatch(removeItem(product));
    // };

    const brandsGroup = [];
    if (brands.length > 0) {
        brands.forEach((brand) => {
            brandsGroup.push({
                id: brand.id,
                value: brand.id,
                label: brand.name,
            });
        });
    }

    return (
        <FilterShopWrapper>
            <FilterShopSection>
                <h4 className="widget-title">Categories</h4>
                {categories && categories.length > 0 ? (
                    <FilterShopSectionList>
                        <li>
                            <a href="/gifts" onClick={(e) => handleFilterProductsByCategory(e, null, null)}>
                                All
                            </a>
                        </li>
                        {categories.map((category) => (
                            <li key={category.id}>
                                <a
                                    href={`gift?category=${category.slug}`}
                                    onClick={(e) => handleFilterProductsByCategory(e, category.id, category.title)}>
                                    {category.title}
                                </a>
                            </li>
                        ))}
                    </FilterShopSectionList>
                ) : (
                    'No Category'
                )}
            </FilterShopSection>
            <FilterShopSection>
                <figure>
                    <h4 className="widget-title">By Price</h4>
                    <Slider
                        range
                        defaultValue={[0, 5000]}
                        value={[minPrice, maxPrice]}
                        max={20000}
                        onChange={handleChangeRange}
                    />
                    <p>
                        Price: ₹{minPrice} - ₹{maxPrice}
                    </p>
                </figure>
                <figure>
                    <h4 className="widget-title">By Offer</h4>
                    <Slider
                        range
                        defaultValue={[0, 100]}
                        value={[minOffer, maxOffer]}
                        max={100}
                        onChange={handleChangeOffer}
                    />
                    <p>
                        Offer: {minOffer}% -{maxOffer}%
                    </p>
                </figure>
            </FilterShopSection>
        </FilterShopWrapper>
    );
};

export default FilterShop;
