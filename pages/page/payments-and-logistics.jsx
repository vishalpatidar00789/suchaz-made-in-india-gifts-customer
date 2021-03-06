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
            text: 'Payments & Logistics partner information',
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
        <div className="container">
            {/* <div className="ps-section__header">
                <h1>Page Heading</h1>
            </div> */}
            <div className="ps-section__content mkcustom">
            
                <h3>Payments & Logistics partner information  </h3> 
                <h4>How do I pay for a <a href={siteurl} target="_blank">Madeinindiagifts.in</a> purchase?</h4>
                <p>
                    <a href={siteurl} target="_blank">Madeinindiagifts.in</a> offers you multiple payment methods. Whatever your online mode of payment, you can rest assured that <a href={siteurl} target="_blank">Madeinindiagifts.in</a>'s trusted payment gateway partners use secure encryption technology to keep your transaction details confidential at all times.                
                </p>
                <p>You may use Internet Banking,Credit card, debit card and Wallet to make your purchase.</p>
                <p><a href={siteurl} target="_blank">Madeinindiagifts.in</a> also accepts payments made using Visa, MasterCard, Maestro and American Express credit/debit cards in India. This is all subject to the availability of modes on payment gateway provider.</p>
                <h4>Are there any hidden charges (Octroi or Sales Tax) when I make a purchase on <a href={siteurl} target="_blank">Madeinindiagifts.in</a>?</h4>
                <p>There are NO hidden charges when you make a purchase on <a href={siteurl} target="_blank">Madeinindiagifts.in</a>. The prices listed for all the items are final and all-inclusive. The price you see on the product page is exactly what you pay.
Delivery charges are extra and may also depend on the offer seller is willing to offer to customers. Please check individual seller for the same.
We don’t offer any Gift card redemption and COD on any items sold by seller on our Website.</p>

                 <h4>Logistics partner Information:</h4>
                 <p><a href={siteurl} target="_blank">Madeinindiagifts.in</a> offers's safe & secured delivery from our trusted Logistics partners. At anytime, madeinindiagifts.in doesn’t authorize any one collect COD money as per the payment policy we don’t offer any COD facilities to any of our customers.</p>       
                
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
