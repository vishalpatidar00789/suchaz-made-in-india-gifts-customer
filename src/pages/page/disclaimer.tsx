import React from 'react';
import { NextPage } from 'next';
import MainLayout from 'layouts/main-layout';
import BreadCrumb from 'components/bread-crumb';
import { SinglePageWrapper, DisclaimerPageSection, DisclaimerPageContent } from 'assets/styles/page.style';
type Page = NextPage & { Layout?: React.FC };

const breadCrumb = [
    {
        text: 'Home',
        url: '/',
    },
    {
        text: 'Disclaimer',
    },
];
const siteurl = 'https://www.madeinindiagifts.in';
const DisclaimerPage: Page = () => (
    <SinglePageWrapper>
        <BreadCrumb breadCrumbList={breadCrumb} />
        <DisclaimerPageSection>
            <div className="container">
                {/* <div className="ps-section__header">
                <h1>Page Heading</h1>
            </div> */}
                <DisclaimerPageContent>
                    <h3>
                        Disclaimer for 
                        <a href={siteurl} target="_blank">
                            Madeinindiagifts.in
                        </a>
                    </h3>
                    <p>
                        If you require any more information or have any questions about our site's disclaimer, please
                        feel free to contact us by email at{' '}
                        <a href="mailto:neelesh@madeinindiagifts.in"> neelesh@madeinindiagifts.in</a>
                    </p>
                    <p>
                        All the information on this website - 
                        <a href={siteurl} target="_blank">
                            www.madeinindiagifts.in
                        </a>
                         - is published in good faith and for general information purpose only. 
                        <a href={siteurl} target="_blank">
                            www.madeinindiagifts.in
                        </a>
                         does not make any warranties about the completeness, reliability and accuracy of this
                        information. Any action you take upon the information you find on this website (
                        <a href={siteurl} target="_blank">
                            www.madeinindiagifts.in
                        </a>
                        ), is strictly at your own risk. 
                        <a href={siteurl} target="_blank">
                            www.madeinindiagifts.in
                        </a>
                         will not be liable for any losses and/or damages in connection with the use of our website.
                        From our website, you can visit other websites by following hyperlinks to such external sites.
                        While we strive to provide only quality links to useful and ethical websites, we have no control
                        over the content and nature of these sites. These links to other websites do not imply a
                        recommendation for all the content found on these sites. Site owners and content may change
                        without notice and may occur before we have the opportunity to remove a link which may have gone
                        'bad'.
                    </p>
                    <p>
                        Please be also aware that when you leave our website, other sites may have different privacy
                        policies and terms which are beyond our control. Please be sure to check the Privacy Policies of
                        these sites as well as their "Terms of Service" before engaging in any business or uploading any
                        information.
                    </p>
                    <h4>Consent</h4>
                    <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
                    <h4>Update</h4>
                    <p>
                        Should we update, amend or make any changes to this document, those changes will be prominently
                        posted here.
                    </p>
                </DisclaimerPageContent>
            </div>
        </DisclaimerPageSection>
    </SinglePageWrapper>
);

DisclaimerPage.Layout = MainLayout;

export default DisclaimerPage;
