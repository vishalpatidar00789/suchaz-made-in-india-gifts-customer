import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import createStore from '../store/store';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { DefaultSeo } from 'next-seo';
import _DEFAULT_SEO from '../next-seo.config'

import '../scss/style.scss';
import '../scss/home-default.scss';


class MyApp extends App {
    constructor(props) {
        super(props);
        this.persistor = persistStore(props.store);
    }

    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
    
        return { pageProps };
      }

    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
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
                <PersistGate
                    loading={<Component {...pageProps} />}
                    persistor={this.persistor}>
                    <DefaultSeo {..._DEFAULT_SEO} />
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        );
    }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
