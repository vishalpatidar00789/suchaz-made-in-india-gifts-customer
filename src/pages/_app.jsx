import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/styles/theme/default';
import { GlobalStyle } from 'assets/styles/global.style';
import Router from 'next/router';
import Loader from 'components/loader';
import ScrollTop from 'components/scroll-element';
import { DefaultSeo } from 'next-seo';
import _DEFAULT_SEO from '../../next-seo.config';
import HeadTag from 'layouts/seo/head-tag';
import AppLayoutWrapper from 'layouts/layout.style';
import { Normalize } from 'styled-normalize';

// External CSS import here
import '../assets/styles/extend-style.scss';
import 'react-image-lightbox/style.css';
// External CSS import here

class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
        this.state = {
            pageLoading: false,
            pageOpenLoaded: false,
        };

        Router.events.on('routeChangeStart', () => {
            // Some page has started loading
            this.setState({ pageLoading: true });
        });

        Router.events.on('routeChangeComplete', () => {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                });
            } catch (error) {
                // just a fallback for older browsers
                window.scrollTo(0, 0);
            }
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

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            setTimeout(() => {
                this.setState({ pageLoading: false });
                this.setState({ pageOpenLoaded: true });
            }, 200);
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const AppLayout = Component.Layout ? Component.Layout : React.Fragment;
        return (
            <ThemeProvider theme={defaultTheme}>
                <Provider store={store}>
                    <PersistGate
                        loading={<Loader loading={true} spinnerType={'FoldingCube'} />}
                        persistor={this.persistor}>
                        <Loader loading={this.state.pageLoading} spinnerType={'FoldingCube'} />
                        <Loader type={'page-open-loader'} loading={this.state.pageOpenLoaded} />
                        <HeadTag />
                        <GlobalStyle />
                        <DefaultSeo {..._DEFAULT_SEO} />
                        <ScrollTop />
                        <Normalize />
                        <AppLayoutWrapper disable={this.state.pageLoading}>
                            <AppLayout>
                                <Component {...pageProps} />
                            </AppLayout>
                        </AppLayoutWrapper>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
