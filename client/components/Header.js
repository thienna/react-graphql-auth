import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

import QueryCurrentUser from '../queries/CurrentUser'
import MutationLogout from '../mutations/Logout'

class Header extends Component {

    onLogoutClick() {
        this.props.mutate({
            refetchQueries: [{ query: QueryCurrentUser }]
        })
    }

    renderButtons() {
        const { loading, user } = this.props.data

        if (loading) {
            return <div />
        }

        if (user) {
            return <li><a onClick={this.onLogoutClick.bind(this)}>Logout</a></li>
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </div>
            )
        }
    }

    render() {
        console.log(this.props.data)
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo left">Home</Link>
                    <ul className="right">
                        {this.renderButtons()}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default graphql(MutationLogout)(graphql(QueryCurrentUser)(Header))
