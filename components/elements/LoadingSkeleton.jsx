import React from 'react';
import Skeleton from 'react-loading-skeleton';

const LoadingSkeleton = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ outline: 'none', width: 258 }}>
                <div className="item">
                    <div className="ps-product ps-product--inner">
                        <div className="ps-product__thumbnail">
                            <Skeleton height={201} width={201} />
                        </div>
                        <div className="ps-product__container">
                            <a className="ps-product__vendor">
                                <Skeleton width={50} />
                            </a>
                            <div className="ps-product__content">
                                <p className="ps-product__price sale">
                                    <Skeleton width={50} />
                                </p>
                                <Skeleton width={201} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ outline: 'none', width: 258 }}>
                <div className="item">
                    <div className="ps-product ps-product--inner">
                        <div className="ps-product__thumbnail">
                            <Skeleton height={201} width={201} />
                        </div>
                        <div className="ps-product__container">
                            <a className="ps-product__vendor">
                                <Skeleton width={50} />
                            </a>
                            <div className="ps-product__content">
                                <p className="ps-product__price sale">
                                    <Skeleton width={50} />
                                </p>
                                <Skeleton width={201} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ outline: 'none', width: 258 }}>
                <div className="item">
                    <div className="ps-product ps-product--inner">
                        <div className="ps-product__thumbnail">
                            <Skeleton height={201} width={201} />
                        </div>
                        <div className="ps-product__container">
                            <a className="ps-product__vendor">
                                <Skeleton width={50} />
                            </a>
                            <div className="ps-product__content">
                                <p className="ps-product__price sale">
                                    <Skeleton width={50} />
                                </p>
                                <Skeleton width={201} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ outline: 'none', width: 258 }}>
                <div className="item">
                    <div className="ps-product ps-product--inner">
                        <div className="ps-product__thumbnail">
                            <Skeleton height={201} width={201} />
                        </div>
                        <div className="ps-product__container">
                            <a className="ps-product__vendor">
                                <Skeleton width={50} />
                            </a>
                            <div className="ps-product__content">
                                <p className="ps-product__price sale">
                                    <Skeleton width={50} />
                                </p>
                                <Skeleton width={201} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ outline: 'none', width: 258 }}>
                <div className="item">
                    <div className="ps-product ps-product--inner">
                        <div className="ps-product__thumbnail">
                            <Skeleton height={201} width={201} />
                        </div>
                        <div className="ps-product__container">
                            <a className="ps-product__vendor">
                                <Skeleton width={50} />
                            </a>
                            <div className="ps-product__content">
                                <p className="ps-product__price sale">
                                    <Skeleton width={50} />
                                </p>
                                <Skeleton width={201} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default LoadingSkeleton;
