import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../../../elements/menu/Menu';
import axios from 'axios';

class MenuCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: [],
        };
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
       // let self = this;
        // setTimeout(async () => {
        //     const reponse = await axios
        //         .get(`${process.env.API_URL}/menu/list`)
        //         .then((res) => {
        //             return res.data;
        //         })
        //         .catch((error) => ({ error: JSON.stringify(error) }));

        //     if (reponse.status == true) {
        //         if (this._isMounted) {
        //             self.setState({ menuData: reponse.data });
        //         }
        //     }
        // }, 200);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
        const { menuData } = this.props;
        return (
            <div>
                <Menu data={menuData.category} className="menu--dropdown" />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.collection;
};
export default connect(mapStateToProps)(MenuCategories);
