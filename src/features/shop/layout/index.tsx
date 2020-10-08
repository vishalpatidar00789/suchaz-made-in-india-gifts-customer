import { Pagination } from 'antd';
import ProductHome from 'features/product/product-home';
import React, { FC, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutShopWrapper, {
    LayoutShopContent,
    LayoutShopHeader,
    LayoutShopHeaderAction,
    LayoutShopHeaderView,
    LayoutShopPaginationWrapper,
    LayoutShopProductWrapper,
} from './layout-shop.style';

type LayoutShopProps = {
    sortBy?: string;
    page?: number;
    limit?: number;
    handlePagination?: (page: any) => void;
    handleSortBy?: (event: any) => void;
    handleChangeOffer?: (value: any) => void;
};
const LayoutShop: FC<LayoutShopProps> = ({
    sortBy,
    page,
    limit,
    handlePagination,
    handleSortBy,
    handleChangeOffer,
}) => {
    const dispatch = useDispatch();
    const [listView, setListView] = useState<boolean>(true);
    const { allProducts, totalProducts } = useSelector((state) => state.product);
    const products = allProducts;
    const total = totalProducts;
    const handleChangeViewMode = (event) => {
        event.preventDefault();
        setListView(!listView);
    };

    useEffect(() => {}, []);

    return (
        <LayoutShopWrapper>
            <LayoutShopHeader>
                <p>
                    <strong className="mr-2">{total}</strong>
                    Products found
                </p>
                <LayoutShopHeaderAction>
                    <select
                        className="ps-select form-control"
                        data-placeholder="Sort Items"
                        onChange={handleSortBy}
                        value={sortBy}>
                        <option value="latest">Sort by latest</option>
                        <option value="offer">Sort by offer</option>
                        <option value="price_asc">Sort by price: low to high</option>
                        <option value="price_desc">Sort by price: high to low</option>
                    </select>
                    {/* <LayoutShopHeaderView>
                        <p>View</p>
                        <ul className="ps-tab-list">
                            <li className={listView === true ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-grid"></i>
                                </a>
                            </li>
                            <li className={listView !== true ? 'active' : ''}>
                                <a href="#" onClick={handleChangeViewMode}>
                                    <i className="icon-list4"></i>
                                </a>
                            </li>
                        </ul>
                    </LayoutShopHeaderView> */}
                </LayoutShopHeaderAction>
            </LayoutShopHeader>
            <LayoutShopContent>
                {listView ? (
                    <LayoutShopProductWrapper>
                        <div className="row">
                            {products && products.length > 0 ? (
                                products.map((item) => (
                                    <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 " key={item.id}>
                                        {/* <Product product={item} /> */}
                                        <div key={item.id}>
                                            <ProductHome product={item} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 ">
                                    <p>No products found.</p>
                                </div>
                            )}
                        </div>
                    </LayoutShopProductWrapper>
                ) : (
                    <LayoutShopProductWrapper>
                        {/* {products && products.length > 0 ? (
                            products.map((item) => <ProductWide product={item} key={item.id} />)
                        ) : (
                            <p>No products found.</p>
                        )} */}
                    </LayoutShopProductWrapper>
                )}
                {products && products.length > 0 ? (
                    <LayoutShopPaginationWrapper>
                        <Pagination
                            total={total}
                            pageSize={limit}
                            responsive={true}
                            defaultCurrent={1}
                            onChange={handlePagination}
                        />
                    </LayoutShopPaginationWrapper>
                ) : (
                    ''
                )}
            </LayoutShopContent>
        </LayoutShopWrapper>
    );
};

export default LayoutShop;
