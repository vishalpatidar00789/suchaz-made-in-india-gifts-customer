import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout';
import Router from 'next/router';
import Loader from '../components/shared/loader';

import '../scss/style.scss';
import '../scss/home-default.scss';

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
        this.state = {
            loading: false,
        };
        Router.onRouteChangeStart = (url) => {
            // Some page has started loading
            this.setState({ loading: true });
        };

        Router.onRouteChangeComplete = (url) => {
            // Some page has finished loading
            this.setState({ loading: false });
        };

        Router.onRouteChangeError = (err, url) => {
            // Getting error while page routing
            this.setState({ loading: false });
        };
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        this.setState({ loading: false });
        setTimeout(function () {
            document.getElementById('__next').classList.add('loaded');
        }, 100);
        if (this._isMounted) {
            this.setState({ open: true });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const getLayout =
            Component.getLayout ||
            ((page) => <DefaultLayout children={page} />);
        return getLayout(
            <Provider store={store}>
                <Loader loading={this.state.loading} />
                <PersistGate
                    loading={
                        <>
                            <Loader loading={this.state.loading} />
                            <div
                                className={
                                    this.state.loading ? 'disableElement' : ''
                                }>
                                <Component {...pageProps} />
                            </div>
                        </>
                    }
                    persistor={this.persistor}>
                    <div className={this.state.loading ? 'disableElement' : ''}>
                        <Component {...pageProps} />
                    </div>
                </PersistGate>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
