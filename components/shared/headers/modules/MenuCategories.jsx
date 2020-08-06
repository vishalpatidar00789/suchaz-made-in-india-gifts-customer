import React, { Component } from 'react';
import Menu from '../../../elements/menu/Menu';
import axios from 'axios';

class MenuCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
        };
    }

    async componentDidMount() {
        let self = this;
        setTimeout(async () => {
            const reponse = await axios
                .get('https://www.suchaz.com/apiv2/menu/list')
                .then((res) => {
                    return res.data;
                })
                .catch((error) => ({ error: JSON.stringify(error) }));

            if (reponse.status == true) {
                self.setState({ menuData: reponse.data });
                console.log();
            }
        }, 200);
    }
    render() {
        const { menuData } = this.state;
        return (
            <div>
                <Menu data={menuData} className="menu--dropdown" />
            </div>
        )
    }
}

export default MenuCategories;
