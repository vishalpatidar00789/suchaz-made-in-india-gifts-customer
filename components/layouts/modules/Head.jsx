import React from 'react';
import Head from 'next/head';

const StyleSheets = () => (
    <Head>
        <title>MadeInIndiaGifts the gift store</title>
        <link rel="shortcut icon" href="/static/icons/icon-72x72.png" />
        <link rel="icon" href="/static/icons/icon-72x72.png" sizes="32x32" />
        <link rel="icon" href="/static/icons/icon-72x72.png" sizes="192x192" />
        <link
            rel="apple-touch-icon-precomposed"
            href="/static/icons/icon-72x72.png"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="application-name" content="MadeInIndiaGifts" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MadeInIndiaGifts" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
            name="msapplication-config"
            content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#c3404e" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#c3404e" />
        <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/icon-512x512.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/icon-72x72.png"
        />
        <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/icons/icon-72x72.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
            rel="mask-icon"
            href="/static/icons/icon-512x512.png"
            color="#5bbad5"
        />
        <link rel="shortcut icon" href="/static/icons/icon-72x72.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://MadeInIndiaGifts.com" />
        <meta name="twitter:title" content="MadeInIndiaGifts" />
        <meta name="twitter:description" content="Best PWA App in the world" />
        <meta
            name="twitter:image"
            content="https://MadeInIndiaGifts.com/static/icons/icon-512x512.png"
        />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Best online store" />
        <meta
            property="og:description"
            content="Best online store in the world"
        />
        <meta property="og:site_name" content="MadeInIndiaGifts App" />
        <meta property="og:url" content="https://MadeInIndiaGifts.com" />
        <meta
            property="og:image"
            content="https://MadeInIndiaGifts.com/static/icons/icon-512x512.png"
        />
        <meta name="author" content="nouthemes" />
        <meta name="keywords" content="Sculptures, Idols, Statues, Ganesha Statues, Handmade Ganesha, Madeinindia Ganesha
Ganapati Bappa Idols" />
        <meta name="description" content="Sculptures, Idols, Statues, Ganesha Statues, Handmade Ganesha, Madeinindia Ganesha
Ganapati Bappa Idols" />
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
        <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/slick.min.css"
        />
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-145433032-2"></script>
        <script
            dangerouslySetInnerHTML={{
                __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-145433032-2');
              `,
            }}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
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
            }}
        />
          <script
            dangerouslySetInnerHTML={{
                __html: `
                let deferredPrompt;

                window.addEventListener('beforeinstallprompt', (e) => {
                  // Prevent the mini-infobar from appearing on mobile
                  e.preventDefault();
                  // Stash the event so it can be triggered later.
                  deferredPrompt = e;
                });
              `,
            }}
        />
    </Head>
);

export default StyleSheets;
