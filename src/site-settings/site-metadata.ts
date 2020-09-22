export type MetaData = {
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

export const siteMetadata = {
    title: `MadeInIndiaGifts the gift store`,
    author: {
        name: `@miigDev`,
        summary: `MIIG, Inc`,
    },
    description: `Sculptures, Idols, Statues, Ganesha Statues, Handmade Ganesha, Madeinindia Ganesha
        Ganapati Bappa Idols`,
    keywords: `Sculptures, Idols, Statues, Ganesha Statues, Handmade Ganesha, Madeinindia Ganesha
            Ganapati Bappa Idols`,
    siteUrl: `https://MadeInIndiaGifts.com`,
    canonical: `https://MadeInIndiaGifts.com`,
    application_name: `MadeInIndiaGifts`,
    apple_mobile_web_app_title: `MadeInIndiaGifts`,
    manifest: `/manifest.json`,
    theme_color: `#c3404e`,
    icons: [
        {
            rel: `shortcut icon`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `32x32`,
        },
        {
            rel: `icon`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `32x32`,
        },
        {
            rel: `icon`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `192x192`,
        },
        {
            rel: `apple-touch-icon-precomposed`,
            href: `/static/icons/icon-72x72.png`,
        },
        {
            rel: `apple-touch-icon`,
            href: `/static/icons/icon-512x512.png`,
            sizes: `180x180`,
        },
        {
            rel: `icon`,
            type: `image/png`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `32x32`,
        },
        {
            rel: `icon`,
            type: `image/png`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `16x16`,
        },
        {
            rel: `shortcut icon`,
            type: `image/png`,
            href: `/static/icons/icon-72x72.png`,
            sizes: `72x72`,
        },
        {
            rel: `mask-icon`,
            type: `image/png`,
            href: `/static/icons/icon-512x512.png`,
            sizes: `512x512`,
            color: `#5bbad5`,
        },
    ],
    social: [
        {
            twitter: {
                card: `summary`,
                url: `https://MadeInIndiaGifts.com`,
                title: `MadeInIndiaGifts`,
                description: `Best PWA App in the world`,
                image: `/static/icons/icon-512x512.png`,
                creator: `@miigDev`,
            },
        },
    ],
    openGraph: {
        type: `website`,
        url: `https://MadeInIndiaGifts.com`,
        title: `Best online store`,
        description: `Best online store in the world`,
        site_name: `MadeInIndiaGifts App`,
        image: `/static/icons/icon-512x512.png`,
        creator: `@miigdev`,
    },
    msapplication: {
        tileColor: `#c3404e`,
        tap_highlight: `no`,
        config: `/static/icons/browserconfig.xml`,
    },
    stylesheets: [
        {
            name: `Linearicons`,
            href: `/static/fonts/Linearicons/Font/demo-files/demo.css`,
        },
        {
            name: `font-awesome`,
            href: `/static/fonts/font-awesome/css/font-awesome.min.css`,
        },
        {
            name: `bootstrap`,
            href: `/static/css/bootstrap.min.css`,
        },
        {
            name: `slick`,
            href: `/static/css/slick.min.css`,
        },
    ],
    external_services: [
        {
            google_tag_manager: {
                config: `https://www.googletagmanager.com/gtag/js?id=UA-145433032-2`,
                contentLoad: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-145433032-2');
                    `,
            },
            tawk: {
                contentLoad: `
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/5f3195a05c885a1b7fb7e1b0/default';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();
                    `,
            },
        },
    ],
};
