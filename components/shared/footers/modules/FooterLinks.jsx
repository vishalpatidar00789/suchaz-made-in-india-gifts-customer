import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Gift for Men',
            url: '/gift'
        },
        {
            text: 'Gift for Women',
            url: '/gift'
        },
        {
            text: 'Gift for Boys',
            url: '/gift'
        },
        {
            text: 'Gift for Girls',
            url: '/gift'
        },
        // {
        //     text: 'TV Televisions',
        //     url: '/shop'
        // },
        // {
        //     text: 'Washing Machines',
        //     url: '/shop'
        // }
    ],
    clothingAndApparel: [
        {
            text: 'Gift for Sporty People',
            url: '/gift'
        },
        {
            text: 'Gift for Music Lover',
            url: '/gift'
        },
        // {
        //     text: '',
        //     url: '/shop'
        // },
        // {
        //     text: 'Store &amp; Business',
        //     url: '/shop'
        // },
        // {
        //     text: '4K Ultra HD TVs',
        //     url: '/shop'
        // },
        // {
        //     text: 'LED TVs',
        //     url: '/shop'
        // },
        // {
        //     text: 'OLED TVs',
        //     url: '/shop'
        // }
    ],
    gardenAndKitchen: [
        {
            text: 'Gift for Rakhi',
            url: '/gift'
        },
        {
            text: 'Gift for Diwali',
            url: '/gift'
        },
        {
            text: 'Gift for Birthday',
            url: '/gift'
        },
        // {
        //     text: 'Garden Tools',
        //     url: '/shop'
        // },
        // {
        //     text: 'Garden Equipments',
        //     url: '/shop'
        // },
        // {
        //     text: 'Powers And Hand Tools',
        //     url: '/shop'
        // },
        // {
        //     text: 'Utensil & Gadget',
        //     url: '/shop'
        // }
    ],
    healthAndBeauty: [
        {
            text: 'Gift for Girlfriend',
            url: '/gift'
        },
        {
            text: 'Gift for Boyfriend',
            url: '/gift'
        },
        {
            text: 'Gift for Wife',
            url: '/gift'
        },
        // {
        //     text: 'Body Shower',
        //     url: '/shop'
        // },
        // {
        //     text: 'Skin Care',
        //     url: '/shop'
        // },
        // {
        //     text: 'Cologine',
        //     url: '/shop'
        // },
        // {
        //     text: 'Perfume',
        //     url: '/shop'
        // }
    ],
    jewelryAndWatch: [
        {
            text: 'Novelty',
            url: '/gift'
        },
        {
            text: 'A',
            url: '/gift'
        },
        {
            text: 'B',
            url: '/gift'
        },
        // {
        //     text: 'Sliver Earing',
        //     url: '/shop'
        // },
        // {
        //     text: 'Leather Watcher',
        //     url: '/shop'
        // },
        // {
        //     text: 'Gucci',
        //     url: '/shop'
        // }
    ],
    computerAndTechnology: [
        {
            text: 'Desktop PC',
            url: '/gift'
        },
        {
            text: 'Laptop',
            url: '/gift'
        },
        {
            text: 'Smartphones',
            url: '/gift'
        },
        {
            text: 'Tablet',
            url: '/gift'
        },
        {
            text: 'Game Controller',
            url: '/gift'
        },
        {
            text: 'Audio & Video',
            url: '/gift'
        },
        {
            text: 'Wireless Speaker',
            url: '/gift'
        }
    ]
};

const FooterLinks = () => (
    <div className="ps-footer__links">
        <p>
            <strong>Gift by Recipient:</strong>
            {Links.consumerElectric.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Gift by Personality:</strong>
            {Links.clothingAndApparel.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Gift by Occasion:</strong>
            {Links.gardenAndKitchen.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Gift by Relationship:</strong>
            {Links.healthAndBeauty.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        <p>
            <strong>Gift by Category:</strong>
            {Links.jewelryAndWatch.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p>
        {/* <p>
            <strong>Computer &amp; Technologies:</strong>
            {Links.computerAndTechnology.map(item => (
                <Link href={item.url} key={item.text}>
                    <a>{item.text}</a>
                </Link>
            ))}
        </p> */}
    </div>
);

export default FooterLinks;
