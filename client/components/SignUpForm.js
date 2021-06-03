import React, { Component } from 'react'
import { graphql } from 'react-apollo'

import AuthForm from './AuthForm'
import mutationLogin from '../mutations/Login'
import QueryCurrentUser from '../queries/CurrentUser'

class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            errors: []
        }
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{query: QueryCurrentUser}]
        }).catch(err => { 
            const errors = err.graphQLErrors.map(item => item.message)
            this.setState({ errors })
         })
    }

    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <AuthForm onFormSubmit={this.onSubmit.bind(this)} errors={this.state.errors} />
            </div>
        )
    }
}

export default graphql(mutationLogin)(SignUpForm)
