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
            text: 'About us',
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
            
                <h3>About us</h3> 
                 <p>
                        It all started after realizing that how great & diverse Indian artwork is and how in this great time of global distress this Art and can seep in with the voice of local. It’s so huge that every state has varities of artwork within them and we all know how many states in India are, right?                
                </p>
                <p>
                    MadeinIndiagifts team is completely dedicated to enable and scale small to large scale enterprises in providing the charm of Indian Art work as well as their hard work. We only Sell items Made in India that's our core USP and we never go to that extent to change it either for money or otherwise.
                </p>
                <p>
                We are enablers digitally, so all the products are not been bought by us rather we have enabled all the Artists, and Manufacturers to onboard with us with a fair competition and no manipulation of price or terms.
                </p>
                <p>
                We handle all their Visibility and Availability and they provide their best in terms of products thats how fairly we transact.
                </p>
                <p>
                We are totally into Gift items encompassing all of the categories within it. Ranging from
Sculpted Ganpati idols from Maharashtra to woolen
                </p>
                <p>
                We hope you would feel very comfortable in shopping on our website, and you would love the Art which Indian Artists are presenting to you. Thanks for motivating our Indian Artist & Manufacturers this is the most needed thing at this moment for them.
                </p>
                <p>We would be very happy to hear from you contact us

                </p>

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
