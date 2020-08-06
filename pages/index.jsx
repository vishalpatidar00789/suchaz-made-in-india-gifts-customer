import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderDefault from '../components/shared/headers/HeaderDefault';
import FooterFullwidth from '../components/shared/footers/FooterFullwidth';
import HomeBanner from '../components/partials/homepage/home-default/HomeBanner';
import SiteFeatures from '../components/partials/homepage/home-default/SiteFeatures';
import HomeAdsColumns from '../components/partials/homepage/home-default/HomeAdsColumns';
import ConumerElectronics from '../components/partials/homepage/home-default/ConumerElectronics';
import Clothings from '../components/partials/homepage/home-default/Clothings';
import GardenAndKitchen from '../components/partials/homepage/home-default/GardenAndKitchen';
import HomeAds from '../components/partials/homepage/home-default/HomeAds';
import DownLoadApp from '../components/partials/commons/DownLoadApp';
import NewArrivals from '../components/partials/homepage/home-default/NewArrivals';
import Newletters from '../components/partials/commons/Newletters';
import HeaderMobile from '../components/shared/headers/HeaderMobile';
import NavigationList from '../components/shared/navigation/NavigationList';
import HomeDefaultDealOfDay from '../components/partials/homepage/home-default/HomeDefaultDealOfDay';
import HomeDefaultNewArrival from '../components/partials/homepage/home-default/HomeDefaultNewArrival';
import HomeDefaultTopCategories from '../components/partials/homepage/home-default/HomeDefaultTopCategories';
import SubscribePopup from '../components/shared/SubscribePopup';
import { getCollections, getNewArrival, getCategories } from '../store/collection/action';

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
            // const collectionsSlug = [
            //     'deal_of_the_day'
            // ];
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
                <SubscribePopup active={subscribe} />
                <main id="homepage-1">
                    <HomeBanner />
                    {/* <SiteFeatures /> */}
                     <HomeDefaultNewArrival collectionSlug="new_arrival" />
                     
                   
                    {/* <HomeDefaultTopCategories /> */}
                     <HomeAdsColumns />
                    <ConumerElectronics />
                    {/* <Clothings collectionSlug="clothings" />
                    <GardenAndKitchen collectionSlug="garden_and_kitchen" /> */}
                    <HomeDefaultDealOfDay collectionSlug="deal_of_the_day" />
                    {/* <HomeAds /> */}
                   {/* <DownLoadApp />   */}
                    {/* <NewArrivals collectionSlug="new_arrivals_products" /> */}
                    {/* <Newletters /> */}
                </main>
                <FooterFullwidth />
                {/* <button className="add-button">Add to home screen</button> */}
            </div>
        );
    }
}

export default connect(state => state.collection)(Index);
