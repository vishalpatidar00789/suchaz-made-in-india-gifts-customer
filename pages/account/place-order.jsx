import React, { Component } from 'react';

class PlaceOrderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mid: 'SvkUNl65990264654763',// 'XrcTwG76068208798468', // 'SvkUNl65990264654763',
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
