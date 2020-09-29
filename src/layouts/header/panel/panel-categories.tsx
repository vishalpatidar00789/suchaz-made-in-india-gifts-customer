import React, { FC, useState, useEffect } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu;
import axios from 'axios';
import { PanelCategoriesWrapper } from './panel.style';

const PanelCategories: FC = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const [menuData, setMenuData] = useState({
        category: [],
    });

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    useEffect(() => {
        async function fetchCategoriesData() {
            try {
                const response = await axios.get(`${process.env.API_URL}/menu/list`);
                if (response.status) {
                    let menuResponse = response.data;
                    setMenuData(menuResponse.data);
                }
            } catch (e) {
                console.error(e);
            }
        }
        fetchCategoriesData();
    }, []);

    const onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(openKeys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <PanelCategoriesWrapper>
            <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange}>
                {menuData &&
                    menuData.category.map((category, index) => (
                        <Menu.Item key={index}>
                            <a href={category.link}>{category.title}</a>
                        </Menu.Item>
                    ))}
            </Menu>
        </PanelCategoriesWrapper>
    );
};
export default PanelCategories;
