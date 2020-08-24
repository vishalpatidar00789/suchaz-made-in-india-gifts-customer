import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultNewArrival from '../components/partials/homepage/home-default/HomeDefaultNewArrival';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import { getCollections, getNewArrival, getCategories, getMenus } from '../store/collection/action';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            this.props.dispatch(getCollections('deal_of_the_day'));
            this.props.dispatch(getNewArrival('new_arrivals'));
            this.props.dispatch(getCategories('get_categories'));
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderDefault />
                <HeaderMobile />
                <NavigationList />
                <main id="homepage-1">
                    <HomeBanner />
                    <HomeDefaultNewArrival collectionSlug="new_arrival" />
                    <HomeDefaultDealOfDay collectionSlug="deal_of_the_day" />
                    <ConumerElectronics />
                    <HomeDefaultTopCategories />
                </main>
                <button className="add-button" style={{position: 'absolute', top: 1, left: 1, display: 'none'}}>Add to home screen</button>
                <FooterFullwidth />
            </div>
        );
    }
}

export default connect(state => state.collection)(Index);
