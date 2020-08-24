import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import categories from '../../../public/static/data/static-categories.json';
import axios from 'axios';
const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['sub1'],
            menuData: {
                category: [],
            },
        };
    }
    _isMounted = false;

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    async componentDidMount() {
        this._isMounted = true;
        let self = this;
        setTimeout(async () => {
            const reponse = await axios
                .get(`${process.env.API_URL}/menu/list`)
                .then((res) => {
                    return res.data;
                })
                .catch((error) => ({ error: JSON.stringify(error) }));

            if (reponse.status == true) {
                if (this._isMounted) {
                    self.setState({ menuData: reponse.data });
                }
            }
        }, 200);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(
            (key) => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {this.state.menuData.category.map((category, index) => (
                    <Menu.Item key={index}>
                        <a href={category.link}>{category.title}</a>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}

export default PanelCategories;
