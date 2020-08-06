import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import {
    getOrderHistory,
    getOrderHistorySuccess,
} from '../../../../store/product/action';
import { connect } from 'react-redux';
import moment from 'moment';

import Link from 'next/link';

class TableInvoices extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        setTimeout(() => {
            const {auth} = this.props;
            this.props.dispatch(getOrderHistory(auth.authUser.token));
        },200);
    }

    render() {
        /*
            You can change data by API
            example: https://ant.design/components/table/
        */

        let orderHistory = this.props.product.orderHistorySuccess
            ? this.props.product.orderHistorySuccess.data.docs
            : [];

        let tableData = [
            // {
            //     id: '1',
            //     invoiceId: '500884010',
            //     title: 'Marshall Kilburn Portable Wireless Speaker',
            //     dateCreate: '20-1-2020',
            //     amount: '42.99',
            //     status: 'Successful delivery',
            // }
        ];
        orderHistory.map((order, index) => {
            tableData.push({
                id: index + 1,
                invoiceId: order._id,
                title: order.lineItems.vendorItem.title,
                dateCreate: moment(order.createdAt).format('DD-MM-YYYY hh:mm A'),
                amount: order.lineItems.finalTotal,
                status: (order.orderStatusMsg == 'Init') ? 'Payment Failed' : order.orderStatusMsg
            });
        });

        const tableColumn = [
            {
                title: 'Id',
                dataIndex: 'invoiceId',
                rowKey: 'invoiceId',
                key: 'invoiceId',
                width: '20px',
                render: (text, record, index) => (
                    <Link
                        href={`/account/invoice-detail?id=${record.invoiceId}`}>
                       <a>  {++index} </a>
                    </Link>
                ),
            },
            {
                title: 'Title',
                dataIndex: 'title',
                rowKey: 'title',
                key: 'title',
                render: (text, record) => (
                    <Link
                        href={`/account/invoice-detail?id=${record.invoiceId}`}>
                       <a>  {record.title} </a>
                    </Link>
                ),
            },
            {
                title: 'Date',
                rowKey: 'dateCreate',
                dataIndex: 'dateCreate',
                key: 'dateCreate',
                width: '120px',
            },
            {
                title: 'Amount',
                rowKey: 'amount',
                dataIndex: 'amount',
                key: 'amount',
                render: (text, record) => (
                    <span className="text-right">₹{record.amount}</span>
                ),
            },
            {
                title: 'Status',
                key: 'status',
                dataIndex: 'status',
                rowKey: 'status',
                width: '150px',
                render: (text, record) => (
                    <span className="text-right">{record.status}</span>
                ),
            },
        ];
        return (
            <div>
                <Table
                    columns={tableColumn}
                    dataSource={tableData}
                    rowKey={(record) => record.id}
                />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.product,
        auth: state.auth,
    };
};
export default connect(mapStateToProps)(TableInvoices);
