import React, { Component } from 'react'

class AuthForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    onSubmit(event) {
        event.preventDefault()

        this.props.onFormSubmit(this.state)
    }

    render() {
        return (
            <div className="row">
                <form className="col s4 m6" onSubmit={this.onSubmit.bind(this)}>
                    <div class="input-field">
                        <label>Email:</label>
                        <input 
                        placeholder="Email"
                        value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} />
                    </div>
                    <div class="input-field">
                        <label>Password:</label>
                        <input 
                        type="password"
                        placeholder="Password"
                        value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} />
                    </div>

                    <div className="errors">
                        {this.props.errors.map(error => <div key={error}>{error}</div>)}
                    </div>

                    <button className="btn">Submit</button>
                </form>
            </div>
        )
    }
}

export default AuthForm
