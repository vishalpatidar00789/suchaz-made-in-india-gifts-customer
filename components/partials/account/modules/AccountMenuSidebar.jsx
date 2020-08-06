import React, { Component } from 'react';
import Link from 'next/link';
import { getAuth, logOut } from '../../../../store/auth/action';
import { connect } from 'react-redux';

class AccountMenuSidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
            data: [],
        };
    }

    componentDidMount() {
        this.props.dispatch(getAuth());
        setTimeout(() => {
            const { auth, data } = this.props;
            let authUser = auth.authUser.data;
            this.setState({ authUser: authUser, data: data });
        }, 500);
    }

    handleLogout = e => {
        e.preventDefault();
        this.props.dispatch(logOut());
    };

    render() {
        const { authUser, data } = this.state;
        return (
            <aside className="ps-widget--account-dashboard">
                <div className="ps-widget__header">
                    {/* <img src="/static/img/users/3.jpg" /> */}
                    <figure>
                        <figcaption>
                        {authUser && typeof authUser.userProfile != 'undefined'
                            ? authUser.userProfile.fullName
                            : ''}
                    </figcaption>
                        <p>{authUser ? authUser.email : ''}</p>
                    </figure>
                </div>
                <div className="ps-widget__content">
                    <ul>
                        {data.map((link) => (
                            <li
                                key={link.text}
                                className={link.active ? 'active' : ''}>
                                <Link href={link.url}>
                                    <a>
                                        <i className={link.icon}></i>
                                        {link.text}
                                    </a>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/account/my-account">
                                <a href="#" onClick={this.handleLogout.bind(this)}>Logout</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps)(AccountMenuSidebar);
