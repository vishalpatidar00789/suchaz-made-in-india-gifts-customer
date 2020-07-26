import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRouter, useRouter } from 'next/router';
import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';



const HeaderActions = (props) => { 
    const router = useRouter();
    let pathname = router.pathname;
    
    const { compare, wishlist, auth } = props;
    return (
        <div className="header__actions">
        {/* <Link href="/account/compare">
            <a className="header__extra">
                <i className="icon-chart-bars"></i>
                <span>
                    <i>
                        {compare
                            ? compare.compareTotal
                            : compare.compareTotal}
                    </i>
                </span>
            </a>
        </Link>
        
        <Link href="/account/wishlist">
            <a className="header__extra">
                <i className="icon-heart"></i>
                <span>
                    <i>{wishlist.wishlistTotal}</i>
                </span>
            </a>
        </Link> */}
        <Link href="/account/vendor/register">
                            <a className="text-white">
                                Become a Seller
                            </a>
                        </Link>
        {pathname != '/account/checkout' && pathname != '/account/shipping' ? <MiniCart /> : ''}
        
        {auth.isLoggedIn && Boolean(auth.isLoggedIn) === true ? (
            <AccountQuickLinks isLoggedIn={true} />
        ) : (
            <AccountQuickLinks isLoggedIn={false} />
        )}
    </div>
    );
}

const mapStateToProps = state => {
    return state;
};

export default withRouter(connect(mapStateToProps)(HeaderActions));
// export default HeaderActions;

// class HeaderActions extends Component {
//     constructor(props) {
//         super(props);
//       console.log('here');
//     }
//     static getInitialProps({ pathname }){
//         console.log(pathname);
//         return { pathname }
//        }



//     render() {
//         // const { orderID } = router.query;
//         const { compare, wishlist, auth } = this.props;
//         return (
           
//         );
//     }
// }

// const mapStateToProps = state => {
//     return state;
// };

// export default withRouter(connect(mapStateToProps)(HeaderActions));
