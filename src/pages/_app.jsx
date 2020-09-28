import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../site-settings/site-theme/default';
import { GlobalStyle } from '../assets/styles/global.style';
import SEO from '../components/seo';
import { siteMetadata } from '../site-settings/site-metadata';
import AppLayout from '../layouts/app-layout';
import Router from 'next/router';
import Loader from '../components/loader';

// External CSS import here
import '../assets/styles/extend-style.scss';
// External CSS import here

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
        this.state = {
            pageLoading: false,
            openLoaded: false,
        };

        Router.events.on('routeChangeStart', () => {
            // Some page has started loading
            this.setState({ pageLoading: true });
        });

        Router.events.on('routeChangeComplete', () => {
            // Some page has finished loading
            this.setState({ pageLoading: false });
        });

        Router.events.on('routeChangeError', () => {
            // Getting error while page routing
            this.setState({ pageLoading: false });
        });
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
        this.setState({ pageLoading: false });
        setTimeout(() => {
            this.setState({ openLoaded: true });
        }, 200);
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
            ((page) => {
                return (
                    <ThemeProvider theme={defaultTheme}>
                        <Provider store={store}>
                            <PersistGate loading={<Loader loading={true} />} persistor={this.persistor}>
                                <GlobalStyle />
                                <Loader loading={this.state.loading} />
                                <SEO {...siteMetadata} />
                                <AppLayout
                                    children={page}
                                    disableLayout={this.state.pageLoading}
                                    openLoading={this.state.openLoaded}
                                />
                            </PersistGate>
                        </Provider>
                    </ThemeProvider>
                );
            });
        return getLayout(<Component {...pageProps} />);
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
