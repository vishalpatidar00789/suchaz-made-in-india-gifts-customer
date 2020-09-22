export type SeoProps = {
    title: string;
    author: any;
    description: string;
    keywords: string;
    siteUrl?: string;
    canonical?: string;
    application_name?: string;
    apple_mobile_web_app_title?: string;
    manifest?: string;
    theme_color?: string;
    icons?: Array<any>;
    social?: Array<any>;
    openGraph?: any;
    msapplication?: any;
    stylesheets?: Array<any>;
    external_services?: Array<any>;
};

import React from 'react';
import Head from 'next/head';

const SEO: React.FC<SeoProps> = (seoProps) => (
    <Head>
        <title>{seoProps?.title}</title>
        <meta name="description" content={seoProps.description} />
        <meta name="keywords" content={seoProps.keywords} />
        <meta name="author" content={seoProps.author?.name} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content={seoProps.application_name} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
            name="apple-mobile-web-app-title"
            content={seoProps.apple_mobile_web_app_title}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content={seoProps.theme_color} />
        <link rel="manifest" href={seoProps.manifest} />

        {/* openGraph */}
        <meta property="og:type" content={seoProps.openGraph?.type} />
        <meta property="og:title" content={seoProps.openGraph?.title} />
        <meta
            property="og:description"
            content={seoProps.openGraph?.description}
        />
        <meta property="og:site_name" content={seoProps.openGraph?.site_name} />
        <meta property="og:url" content={seoProps.openGraph?.url} />
        <meta property="og:image" content={seoProps.openGraph?.image} />

        {seoProps.social &&
            seoProps.social.map((item) => {
                // twitter
                if (item.twitter) {
                    <>
                        <meta name="twitter:card" content={item.twitter.card} />
                        ;
                        <meta name="twitter:url" content={item.twitter.url} />
                        <meta
                            name="twitter:title"
                            content={item.twitter.title}
                        />
                        <meta
                            name="twitter:description"
                            content={item.twitter.description}
                        />
                        <meta
                            name="twitter:image"
                            content={item.twitter.image}
                        />
                        <meta
                            name="twitter:creator"
                            content={item.twitter.creator}
                        />
                    </>;
                }
            })}

        {/* Windows */}
        <meta
            name="msapplication-config"
            content={seoProps.msapplication?.config}
        />
        <meta
            name="msapplication-TileColor"
            content={seoProps.msapplication?.tileColor}
        />
        <meta
            name="msapplication-tap-highlight"
            content={seoProps.msapplication?.tap_highlight}
        />

        {/* External CSS/SASS Files */}
        {/* {seoProps.stylesheets &&
            seoProps.stylesheets.map((item) => {
                <link rel="stylesheet" type="text/css" href={item.href} />;
            })} */}

        <link
            href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;amp;subset=latin-ext"
            rel="stylesheet"
        />

        <link
            rel="stylesheet"
            href="/static/fonts/Linearicons/Font/demo-files/demo.css"
        />
        <link
            rel="stylesheet"
            href="/static/fonts/font-awesome/css/font-awesome.min.css"
        />

        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/bootstrap.min.css"
        />

        {seoProps.external_services &&
            seoProps.external_services.map((item) => {
                // twitter
                if (item.google_tag_manager) {
                    <>
                        <script
                            async
                            src={item.google_tag_manager.config}></script>
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `${item.google_tag_manager.contentLoad}`,
                            }}
                        />
                    </>;
                }
                if (item.tawk) {
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `${item.tawk.contentLoad}`,
                        }}
                    />;
                }
            })}

        {/*         
    {css && <link rel="stylesheet" href={`${css}`} />}
    {image ? (
        <meta property="og:image" content={`${image}`} />
    ) : (
        <meta
            property="og:image"
            content="https://www.propernoun.co/static/images/proper-noun-social.png"
        />
    )}
    {image && <meta name="twitter:image" content={`${image}`} />} */}
        {/* {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <script type="text/javascript" src={`${js}`}></script>} */}
    </Head>
);
export default SEO;
