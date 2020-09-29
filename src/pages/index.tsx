import Header from 'layouts/header/header';
import React, { FC, useEffect } from 'react';
import { getCollections, getNewArrival, getCategories } from '../store/collection/action';
import { useDispatch } from 'react-redux';
import HeaderMobile from 'layouts/header/header-mobile';
import NavigationMobileHeader from 'layouts/header/navigation/navigation-mobile';

const Index: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCollections('deal_of_the_day'));
        dispatch(getNewArrival('new_arrivals'));
        dispatch(getCategories('get_categories'));
    }, []);
    return (
        <>
            <Header />
            <HeaderMobile />
            <NavigationMobileHeader />
            
        </>
    );
};

export default Index;
