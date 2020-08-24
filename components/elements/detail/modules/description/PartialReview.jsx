import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { Rate, Form, Input, notification, Progress } from 'antd';
import Rating from '../../../Rating';
import TextArea from 'antd/lib/input/TextArea';
import { suchazBaseUrl } from '../../../../../repositories/SuchazOrderRepository';
import axios from 'axios';
import * as moment from 'moment';

class PartialReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 0,
            pid: '',
        };
    }

    formRef = React.createRef();

    modalShow(type, msg, desc) {
        notification[type]({
            message: msg,
            description: desc,
            duration: 1,
        });
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        setTimeout(() => {
            let { query } = this.props.router;
            this.setState({ pid: query.pid });
        }, 500);
    }

    handleReviewSubmit(values) {
        let { singleProduct } = this.props;
        values.itemId = singleProduct.id;

        if (values) {
            axios
                .post(`${suchazBaseUrl}/rating/addReview`, values)
                .then((res) => {
                    this.modalShow('success', 'Success', res.data.message);
                    this.formRef.current.setFieldsValue({
                        rating: 1,
                        description: '',
                        name: '',
                        email: '',
                    });
                })
                .catch((error) => {
                    if (error.response.data) {
                        this.modalShow(
                            'error',
                            'Error',
                            error.response.data.message
                        );
                    }
                    // return Promise.reject(
                    //     'Service not avalible on your postal code'
                    // );
                });
        }
    }

    handleRateChange(e) {
        
    }

    render() {
        let { query } = this.props.router;
        let { singleProduct } = this.props;
        let reviewsList = singleProduct.reviewsList;
        let totalRate = [];
        totalRate[5] = 0;
        totalRate[4] = 0;
        totalRate[3] = 0;
        totalRate[2] = 0;
        totalRate[1] = 0;
        singleProduct.reviewcnt.forEach((element) => {
            if (element._id == 5) {
                totalRate[5] = (element.count * 100 / reviewsList.length).toFixed(0);
            }
            if (element._id == 4) {
                totalRate[4] = (element.count * 100 / reviewsList.length).toFixed(0);
            }
            if (element._id == 3) {
                totalRate[3] = (element.count * 100 / reviewsList.length).toFixed(0);
            }
            if (element._id == 2) {
                totalRate[2] = (element.count * 100 / reviewsList.length).toFixed(0);
            }
            if (element._id == 1) {
                totalRate[1] = (element.count * 100 / reviewsList.length).toFixed(0);
            }
        });

        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-block--average-rating">
                            <div className="ps-block__header">
                                <h3>
                                    {parseFloat(
                                        singleProduct.customerAvgRating
                                    )}
                                </h3>
                                <Rating
                                    rating={parseFloat(
                                        singleProduct.customerAvgRating
                                    )}
                                />

                                <span>
                                    {reviewsList.length} Review
                                </span>
                            </div>
                            <div className="ps-block__star">
                                <span>5 Star</span>
                                <div
                                    className="ps-progress"
                                    data-value={totalRate[5]}>
                                    <span
                                        style={{ width: totalRate[5] + '%' }}
                                    />
                                </div>
                                <span>{totalRate[5]}%</span>
                            </div>
                            <div className="ps-block__star">
                                <span>4 Star</span>
                                <div
                                    className="ps-progress"
                                    data-value={totalRate[4]}>
                                    <span
                                        style={{ width: totalRate[4] + '%' }}
                                    />
                                </div>
                                <span>{totalRate[4]}%</span>
                            </div>
                            <div className="ps-block__star">
                                <span>3 Star</span>
                                <div
                                    className="ps-progress"
                                    data-value={totalRate[3]}>
                                    <span
                                        style={{ width: totalRate[3] + '%' }}
                                    />
                                </div>
                                <span>{totalRate[3]}%</span>
                            </div>
                            <div className="ps-block__star">
                                <span>2 Star</span>
                                <div
                                    className="ps-progress"
                                    data-value={totalRate[2]}>
                                    <span
                                        style={{ width: totalRate[2] + '%' }}
                                    />
                                </div>
                                <span>{totalRate[2]}%</span>
                            </div>
                            <div className="ps-block__star">
                                <span>1 Star</span>
                                <div
                                    className="ps-progress"
                                    data-value={totalRate[1]}>
                                    <span
                                        style={{ width: totalRate[1] + '%' }}
                                    />
                                </div>
                                <span>{totalRate[1]}%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 ">
                        <Form
                            ref={this.formRef}
                            className="ps-form--review"
                            onFinish={this.handleReviewSubmit.bind(this)}>
                            <h4>Submit Your Review</h4>
                            <p>
                                Your email address will not be published.
                                Required fields are marked
                                <sup>*</sup>
                            </p>
                            <div className="form-group form-group__rating">
                                <label>Your rating of this product</label>
                                <Form.Item name="itemId">
                                    <Input
                                        type="hidden"
                                        defaultValue={query.pid}
                                    />
                                </Form.Item>
                                <Form.Item name="rating">
                                    <Rate allowClear={false} className="pt-4" defaultValue={1} />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Enter an review',
                                        },
                                        {
                                            maxLength: 500,
                                            message:
                                                'Maximum 500 characters are allowed',
                                        },
                                        ({ getFieldValue }) => ({
                                            async validator(rule, value) {
                                                if (
                                                    typeof value !=
                                                        'undefined' &&
                                                    value != ''
                                                ) {
                                                    if (
                                                        typeof value !=
                                                            'undefined' &&
                                                        value.length > 500
                                                    ) {
                                                        return Promise.reject(
                                                            'Maximum 500 characters are allowed'
                                                        );
                                                    } else {
                                                        return Promise.resolve();
                                                    }
                                                }
                                            },
                                        }),
                                    ]}>
                                    <TextArea
                                        maxLength="500"
                                        rows="6"
                                        placeholder="Write your review here"
                                    />
                                </Form.Item>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                    <div className="form-group">
                                        <Form.Item
                                            name="name"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter name',
                                                },
                                            ]}>
                                            <Input
                                                placeholder="Your Name"
                                                type="text"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  ">
                                    <div className="form-group">
                                        <Form.Item
                                            name="email"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Enter email',
                                                },
                                            ]}>
                                            <Input
                                                placeholder="Your Email"
                                                type="email"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group submit">
                                <button className="ps-btn">
                                    Submit Review
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div id="comments">
                            <h2 className="woocommerce-Reviews-title">
                                {reviewsList.length} Review For This Product
                            </h2>
                            <ol className="commentlist">
                                {reviewsList &&
                                    reviewsList.map((review, index) => (
                                        <li
                                            key={index}
                                            className="review byuser comment-author-daoanh25 even thread-even depth-1"
                                            id="li-comment-61">
                                            <div
                                                id="comment-61"
                                                className="comment_container">
                                                <img
                                                    alt="avtar"
                                                    src="https://1.gravatar.com/avatar/1fb839a68f69309cd3a40f249079e6e0?s=60&d=mm&r=g"
                                                    srcSet="https://1.gravatar.com/avatar/1fb839a68f69309cd3a40f249079e6e0?s=120&d=mm&r=g 2x"
                                                    className="avatar avatar-60 photo"
                                                    height={60}
                                                    width={60}
                                                />
                                                <div className="comment-text">
                                                    <Rate disabled
                                                        defaultValue={
                                                            review.rating
                                                        }
                                                    />

                                                    <p className="meta">
                                                        <strong className="woocommerce-review__author">
                                                            by{' '}
                                                            <span className="author-name">
                                                                {' '}
                                                                {review.name}
                                                            </span>
                                                        </strong>{' '}
                                                        <time
                                                            className="woocommerce-review__published-date"
                                                            dateTime="2017-12-26T04:33:58+00:00">
                                                            {moment(review.createdAt).format('MMMM DD,YYYY')}
                                                        </time>
                                                    </p>
                                                    <p className="verifiedPurchase">Verified Purchase</p>
                                                    <div className="description">
                                                        <p>
                                                            {review.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withRouter(connect((state) => state.product)(PartialReview));
