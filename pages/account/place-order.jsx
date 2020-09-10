import React, { Component } from 'react';
import axios from 'axios';
import PlaceOrder from '../../components/partials/account/PlaceOrder';
import post from '../../pages/utils';

class PlaceOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mid: 'XrcTwG76068208798468',
            orderId: '',
            txnToken: '',
            isLoading: true,
        };
    }

    async componentDidMount() {
        
    }

 

    render() {
        const { isLoading, mid, orderId, txnToken } = this.state;
        return (
            <div className="site-content">
                
            </div>
        );
    }
}

export default PlaceOrderPage;
