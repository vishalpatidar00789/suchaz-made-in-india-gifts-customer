import React, { Component } from 'react';
import { withRouter } from 'next/router';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import Link from 'next/link';
import ProductCart from '../../elements/products/ProductCart';
import { connect } from 'react-redux';
import axios from 'axios';
import post from '../../../pages/utils';

class InvoiceDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoiceProducts: [],
        };
    }

    async componentDidMount() {
        setTimeout(async () => {
            let result = await this.getOrderHistory();
            if (result.status) {
                this.setState({ invoiceProducts: result.data.docs });
            }
        }, 200);
    }

    async getOrderHistory() {
        const { auth } = this.props;
        const { query } = this.props.router;

        const authorization_prefix = 'Bearer ';
        const token = auth.authUser.token;

        const headers = {
            Authorization: authorization_prefix + token,
        };

        return await axios
            .get(
                `${process.env.API_URL}/order/orderHistoryDetails?id=${query.id}`,
                {
                    headers: headers,
                }
            )
            .then((res) => {
                return res.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
    }

    async handleRetryPlaceOrder(orderId) {
        const { auth } = this.props;

        const { authUser } = auth;

        const authorization_prefix = 'Bearer ';
        const token = authUser.token;

        const headers = {
            Authorization: authorization_prefix + token,
        };

        const reponse = await axios
            .post(
                `${process.env.API_URL}/admin/order/paytmRetryChecksum`,
                { orderId: orderId },
                {
                    headers: headers,
                }
            )
            .then((res) => {
                return res.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));

        if (reponse.status == true) {
            const processParam = reponse.data;
            let details = {
                action: `${process.env.PAYTM_URL}`,
                params: processParam,
            };
            post(details);
        }
    }

    render() {
        const { auth } = this.props;
        const { invoiceProducts } = this.state;

        const accountLinks = [
            // {
            //     text: 'Account Information',
            //     url: '/account/user-information',
            //     icon: 'icon-user',
            // },
            // {
            //     text: 'Notifications',
            //     url: '/account/notifications',
            //     icon: 'icon-alarm-ringing',
            // },
            {
                text: 'Invoices',
                url: '/account/invoices',
                icon: 'icon-papers',
                active: true,
            },
            // {
            //     text: 'Address',
            //     url: '/account/addresses',
            //     icon: 'icon-papers',
            // },
            // {
            //     text: 'Recent Viewed Product',
            //     url: '/account/recent-viewed-product',
            //     icon: 'icon-papers',
            // },
            // {
            //     text: 'Wishlist',
            //     url: '/account/wishlist',
            //     icon: 'icon-papers',
            // },
        ];

        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-page__left">
                                <AccountMenuSidebar
                                    data={accountLinks}
                                    authUser={auth.authUser.data}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="ps-page__content">
                                <div className="ps-section--account-setting">
                                    <div className="ps-section__header">
                                        <h3>
                                            Invoice #
                                            {invoiceProducts.length
                                                ? invoiceProducts[0].orderId
                                                : ''}{' '}
                                            -
                                            <strong>
                                                {invoiceProducts.length
                                                    ? invoiceProducts[0]
                                                          .orderStatusMsg ==
                                                      'Init'
                                                        ? 'Payment Failed'
                                                        : invoiceProducts[0]
                                                              .orderStatusMsg
                                                    : ''}
                                            </strong>{' '}
                                            {invoiceProducts.length &&
                                            invoiceProducts[0].orderStatusMsg ==
                                                'Init' ? (
                                                <React.Fragment>
                                                    -{' '}
                                                    <a
                                                        onClick={this.handleRetryPlaceOrder.bind(
                                                            this,
                                                            invoiceProducts[0]
                                                                .orderId
                                                        )}
                                                        className="ps-btn ps-btn--sm text-white"
                                                        role="button">
                                                        Try again
                                                    </a>
                                                </React.Fragment>
                                            ) : (
                                                ''
                                            )}
                                        </h3>
                                    </div>
                                    <div className="ps-section__content">
                                        <div className="row">
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Address
                                                    </figcaption>
                                                    {invoiceProducts.length ? (
                                                        <div className="ps-block__content">
                                                            <strong>
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .recipientFirstName
                                                                }{' '}
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .recipientLastName
                                                                }
                                                            </strong>
                                                            <p>
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .addressLine1
                                                                }
                                                                ,
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .addressLine2
                                                                }
                                                                ,
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .city
                                                                }
                                                                ,
                                                                {
                                                                    invoiceProducts[0]
                                                                        .shippingAddress
                                                                        .state
                                                                }
                                                            </p>
                                                            <p>
                                                                Phone:{' '}
                                                                {
                                                                    invoiceProducts[0]
                                                                        .contact_no
                                                                }
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </figure>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Charges
                                                    </figcaption>
                                                    <div className="ps-block__content">
                                                        <p>
                                                            Shipping Fee: ₹
                                                            {invoiceProducts.length
                                                                ? invoiceProducts[0]
                                                                      .shippingCharges
                                                                : ''}
                                                        </p>
                                                    </div>
                                                    {invoiceProducts.length &&
                                                    invoiceProducts[0]
                                                        .giftWrapCharges > 0 ? (
                                                        <div className="ps-block__content">
                                                            <p>
                                                                Gift Wrap
                                                                Charge: ₹
                                                                {invoiceProducts.length
                                                                    ? invoiceProducts[0]
                                                                          .giftWrapCharges
                                                                    : ''}
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        ''
                                                    )}
                                                </figure>
                                            </div>
                                            <div className="col-md-4 col-12">
                                                <figure className="ps-block--invoice">
                                                    <figcaption>
                                                        Payment
                                                    </figcaption>
                                                    <div className="ps-block__content">
                                                        <p>
                                                            Payment Method:
                                                            Online
                                                        </p>
                                                    </div>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table ps-table--shopping-cart-1">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Price</th>
                                                        <th>Qty</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {invoiceProducts.length
                                                        ? invoiceProducts[0].lineItems.map(
                                                              (product) => (
                                                                  <tr
                                                                      key={
                                                                          product.productId
                                                                      }>
                                                                      <td>
                                                                          <ProductCart
                                                                              product={
                                                                                  product
                                                                              }
                                                                          />
                                                                      </td>
                                                                      <td className="price">
                                                                          ₹
                                                                          {
                                                                              product
                                                                                  .vendorItem
                                                                                  .bestPrice
                                                                          }
                                                                      </td>

                                                                      <td>
                                                                          {
                                                                              product.quantity
                                                                          }
                                                                      </td>
                                                                      <td className="price">
                                                                          ₹
                                                                          {product
                                                                              .vendorItem
                                                                              .bestPrice *
                                                                              product.quantity +
                                                                              product.giftWrapCharges}
                                                                      </td>
                                                                  </tr>
                                                              )
                                                          )
                                                        : ''}
                                                    <tr>
                                                        <td></td>
                                                        <td colSpan="2">
                                                            Shipping Fee:
                                                        </td>
                                                        <td>
                                                            ₹
                                                            {invoiceProducts.length
                                                                ? invoiceProducts[0]
                                                                      .shippingCharges
                                                                : ''}
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td colSpan="2">
                                                            <h3>Total</h3>
                                                        </td>
                                                        <td>
                                                            ₹
                                                            {invoiceProducts.length
                                                                ? invoiceProducts[0]
                                                                      .finalTotal
                                                                : ''}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <Link href="/account/invoices">
                                            <a className="ps-btn ps-btn--sm ">
                                                Back to invoices
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        product: state.product,
    };
};
export default withRouter(connect(mapStateToProps)(InvoiceDetail));
