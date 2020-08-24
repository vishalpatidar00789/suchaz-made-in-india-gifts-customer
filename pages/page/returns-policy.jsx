import React from 'react';
import FooterDefault from '../../components/shared/footers/FooterDefault';
import BreadCrumb from '../../components/elements/BreadCrumb';
import Newletters from '../../components/partials/commons/Newletters';
import HeaderDefault from '../../components/shared/headers/HeaderDefault';
import HeaderMobile from '../../components/shared/headers/HeaderMobile';
import NavigationList from '../../components/shared/navigation/NavigationList';
import BlankContent from '../../components/partials/page/Blank';

const BlankPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Returns policy',
        },
    ];
    const siteurl = "https://www.madeinindiagifts.in";
    return (
        <div className="site-content ">
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <div className="ps-page--single">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
               <div className="ps-section--custom pt-5">
        <div className="container mkcustom">
            {/* <div className="ps-section__header">
                <h1>Page Heading</h1>
            </div> */}
            <div className="ps-section__content">
                <h3>Returns policy for <a href={siteurl} target="_blank">Madeinindiagifts.in</a></h3> 
                <p>
                   Our refund policy is All Sales Final. Unfortunately we can’t offer you a refund. To be eligible for a return, Only in case of product being damaged only at the time of receiving the package not after use, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Several types of goods are exempt from being returned. Perishable goods such as food, flowers, newspapers or magazines cannot be returned. We also do not accept products that are intimate or sanitary goods, hazardous materials, or flammable liquids or gases.To complete your return, we require a receipt or proof of purchase. Please do not send your purchase back to the seller.If sent madeinindiagifts.in will not be liable to any return, refund or other procedures which may be enforced by us time to time for our users and customers.
                </p>
                <p>In case of return as per above conditions, please contact <a href="mailto:neelesh@madeinindiagifts.in">neelesh@madeinindiagifts.in</a> with relevant documents to initiate the process.
                </p>
                <p>
                    Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.If you are approved, then your return will be processed, 
                </p>
                <p>
                We only replace items if they are defective or damaged.
                </p>
                <h4>Shipping</h4>
                <p>Our products are shipped within Other using the following carriers.</p>
                <h4>Cancelation</h4>
                <p>We don’t offer any cancelation of products also so please be conscious when you are placing any order and upon the same no refunds are applicable.</p>
            </div>
        </div>
    </div>
            </div>
            {/* <Newletters layout="container" /> */}
            <FooterDefault />
        </div>
    );
};

export default BlankPage;
