import Header from 'layouts/header';
import React, { FC, useEffect } from 'react';
import { getCollections, getNewArrival, getCategories, getMenus } from '../store/collection/action';
import { useDispatch } from 'react-redux';
import HomePage from 'features/home-page';

const Index: FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMenus());
        dispatch(getCollections('deal_of_the_day'));
        dispatch(getNewArrival('new_arrivals'));
        dispatch(getCategories('get_categories'));
    }, []);
    return (
        <>
            <HomePage />
        </>
    );
};

export default Index;
