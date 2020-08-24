import React from 'react';

const PartialVendor = (props) => (
    <section>
        <h4>{props.product.vendor?.shop_name
                                                      ? props.product.vendor.shop_name
                                                      : '\u00A0'}</h4>
        <p>
            {props.product.vendor?.description
                                                      ? props.product.vendor.description
                                                      : '\u00A0'}
            {/* Digiworld US, New York’s no.1 online retailer was established in May 2012 with the aim
            and vision to become the one-stop shop for retail in New York with implementation of
            best practices both online */}
        </p>
        {/* <a href="#">More Products from Gopro</a> */}
    </section>
);

export default PartialVendor;
