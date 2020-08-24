import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import {
    getColletionBySlug,
    getColletionBySubcat,
    getCategoriesData,
} from '../../../../utilities/product-helper';
import CollectionProducts from './modules/CollectionProducts';
import { getProductData } from '../../../../utilities/product-helper';
import ClipLoader from 'react-spinners/ClipLoader';

class ConsumerElectronics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
            currentCollection: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1500);
    }

    handleChangeProduct(e, id, slug) {
        e.preventDefault();
        // const { categories } = this.props;
        // const items = getColletionBySubcat(categories, slug);
        // this.setState({
        //     currentCollection: slug
        //     // items: items,
        // });
        Router.push({
            pathname: '/gifts',
            query: {
                id: id,
                name: slug,
                by: 'Category',
            },
        });
    }
    getCategoryBysubCat(categories, currentCollection) {
        // console.log(currentCollection);
        if (categories.id == currentCollection) {
            return categories;
        }
        let filterCategory = categories.filter((c) => {
            return c.category_id === currentCollection;
        });
        // console.log(filterCategory);
        return filterCategory;
    }

    render() {
        // const { collections, collectionSlug } = this.props;
        const { currentCollection, isLoading } = this.state;
        // const products = getColletionBySlug(collections, collectionSlug);

        const { categories } = this.props;
        const products = getCategoriesData(categories);
        const sectionLinks = [
            {
                title: 'New Arrivals',
                name: 'newArrivals',
                slug: 'consumer_electronics',
            },
            // {
            //     title: 'Best seller',
            //     name: 'bestSeller',
            //     slug: 'fullwidth_consumer_electronic_bestseller',
            // },
            // {
            //     title: 'Most Popular',
            //     name: 'mostPopular',
            //     slug: 'fullwidth_consumer_electronic_most_popular',
            // },
        ];
        // let sectionItems;
        // if (currentCollection !== 'newArrivals') {
        //     sectionItems = <CollectionProducts products={items} />;
        // } else {
        // if (products && products.length > 0) {
        //     sectionItems = <CollectionProducts products={products} />;
        // } else {
        //     sectionItems = <p>No Record(s)</p>;
        // }
        // }
        return (
            <div>
                {isLoading ? (
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <ClipLoader
                            size={80}
                            color={'#c3404e'}
                            loading={this.state.isLoading}
                        />
                    </div>
                ) : (
                    ''
                )}
                {products.map((cat) => (
                    <div
                        className="ps-product-list ps-garden-kitchen"
                        key={cat.id}>
                        <div className="ps-container">
                            <div className="ps-section__header">
                                <h3>{cat.title}</h3>
                                <ul className="ps-section__links">
                                    {cat.subcat.map((link) => (
                                        <li
                                            className={
                                                currentCollection === link.id
                                                    ? 'active'
                                                    : ''
                                            }
                                            key={link.title}>
                                            <a
                                                onClick={(e) =>
                                                    this.handleChangeProduct(
                                                        e,
                                                        link._id,
                                                        link.title
                                                    )
                                                }>
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                    <li
                                        className={
                                            currentCollection === cat.id
                                                ? 'active'
                                                : ''
                                        }>
                                        <a
                                            onClick={(e) =>
                                                this.handleChangeProduct(
                                                    e,
                                                    cat.id,
                                                    cat.title
                                                )
                                            }>
                                            View All
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ps-section__content">
                                {currentCollection == '' ? (
                                    <CollectionProducts
                                        products={cat.category}
                                        key={cat.id}
                                    />
                                ) : (
                                    <CollectionProducts
                                        products={this.getCategoryBysubCat(
                                            cat.category,
                                            currentCollection
                                        )}
                                        key={cat.id}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default connect((state) => state.collection)(ConsumerElectronics);
