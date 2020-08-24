import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';

class HomeDefaultTopCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChangeProduct(e, id, slug) {
        e.preventDefault();
        Router.push({
            pathname: '/gifts',
            query: {
                id: id,
                name: slug,
                by: 'Category',
            },
        });
    }
    render() {
        const { menuData } = this.props;
        const category = menuData.menuList;

        return (
            <React.Fragment>
                {category &&
                    category.map((item, index) => (
                        <div key={index} className="ps-product-list ps-top-categories">
                            <div className="ps-container">
                                <div className="ps-section__header">
                                    <div className="ps-block--countdown-deal">
                                        <div className="ps-block__left">
                                            <h3>{item.title}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-section__content">
                                    <div className="row">
                                        {item &&
                                            item.children.map(
                                                (child, index) => (
                                                    <div
                                                        key={index}
                                                        className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                                                        <div className="ps-block--category">
                                                            <Link
                                                                href={
                                                                    child.link
                                                                }
                                                                as={child.link}>
                                                                <a className="ps-block__overlay"></a>
                                                            </Link>
                                                            <img
                                                                height="150"
                                                                src={child.icon}
                                                                alt="icon"
                                                            />
                                                            <p>{child.title}</p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </React.Fragment>
        );
    }
}

export default connect((state) => state.collection)(HomeDefaultTopCategories);
