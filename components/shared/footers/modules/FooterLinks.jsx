import React from 'react';
import Link from 'next/link';
const Links = {
    consumerElectric: [
        {
            text: 'Gift for Men',
            url: '/shop'
        },
        {
            text: 'Gift for Women',
            url: '/shop'
        },
        {
            text: 'Gift for Boys',
            url: '/shop'
        },
        {
            text: 'Gift for Girls',
            url: '/shop'
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
            url: '/shop'
        },
        {
            text: 'Gift for Music Lover',
            url: '/shop'
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
            url: '/shop'
        },
        {
            text: 'Gift for Diwali',
            url: '/shop'
        },
        {
            text: 'Gift for Birthday',
            url: '/shop'
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
            url: '/shop'
        },
        {
            text: 'Gift for Boyfriend',
            url: '/shop'
        },
        {
            text: 'Gift for Wife',
            url: '/shop'
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
            url: '/shop'
        },
        {
            text: 'A',
            url: '/shop'
        },
        {
            text: 'B',
            url: '/shop'
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
            url: '/shop'
        },
        {
            text: 'Laptop',
            url: '/shop'
        },
        {
            text: 'Smartphones',
            url: '/shop'
        },
        {
            text: 'Tablet',
            url: '/shop'
        },
        {
            text: 'Game Controller',
            url: '/shop'
        },
        {
            text: 'Audio & Video',
            url: '/shop'
        },
        {
            text: 'Wireless Speaker',
            url: '/shop'
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
