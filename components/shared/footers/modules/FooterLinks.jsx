import React, { Component } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { connect } from 'react-redux';
import { getMenus } from '../../../../store/collection/action';
let Nlinks = [];
const Links = {
    consumerElectric: [
        {
            text: 'Gift for Men',
            url: '/gifts',
        },
        {
            text: 'Gift for Women',
            url: '/gifts',
        },
        {
            text: 'Gift for Boys',
            url: '/gifts',
        },
        {
            text: 'Gift for Girls',
            url: '/gifts',
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
            url: '/gifts',
        },
        {
            text: 'Gift for Music Lover',
            url: '/gifts',
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
            url: '/gifts',
        },
        {
            text: 'Gift for Diwali',
            url: '/gifts',
        },
        {
            text: 'Gift for Birthday',
            url: '/gifts',
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
            url: '/gifts',
        },
        {
            text: 'Gift for Boyfriend',
            url: '/gifts',
        },
        {
            text: 'Gift for Wife',
            url: '/gifts',
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
            url: '/gifts',
        },
        {
            text: 'A',
            url: '/gifts',
        },
        {
            text: 'B',
            url: '/gifts',
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
            url: '/gifts',
        },
        {
            text: 'Laptop',
            url: '/gifts',
        },
        {
            text: 'Smartphones',
            url: '/gifts',
        },
        {
            text: 'Tablet',
            url: '/gifts',
        },
        {
            text: 'Game Controller',
            url: '/gifts',
        },
        {
            text: 'Audio & Video',
            url: '/gifts',
        },
        {
            text: 'Wireless Speaker',
            url: '/gifts',
        },
    ],
};

class FooterLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuData: {
                menuList: []
            }
        };
    }
    _isMounted = false;

    async componentDidMount() {
        this._isMounted = true;
      //  let self = this;
        // setTimeout(async () => {
        //     const reponse = await axios
        //         .get(`${process.env.API_URL}/menu/list`)
        //         .then((res) => {
        //             return res.data;
        //         })
        //         .catch((error) => ({ error: JSON.stringify(error) }));

        //     if (reponse.status == true) {
        //         if (this._isMounted) {
        //             self.setState({ menuData: reponse.data });
        //             console.log();
        //         }
        //     }
        // }, 200);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { menuData } = this.props;
        return (
            <div className="ps-footer__links">
                {menuData && menuData.menuList && menuData.menuList.map((item, index) => {
                    return (
                        <p key={index}>
                            <strong>{item.title} :</strong>
                            {item.children.map((itemx) => {
                                return (
                                    <Link href={itemx.link} key={itemx.title}>
                                        <a>{itemx.title}</a>
                                    </Link>
                                );
                            })}
                        </p>
                    );
                })}
                {/* <p>
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
        </p> */}
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
    }
}

const mapStateToProps = (state) => {
    return state.collection;
};
export default connect(mapStateToProps)(FooterLinks);
