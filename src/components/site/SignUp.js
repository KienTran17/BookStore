import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login, register } from '../../action/user';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            retypePass: '',
            showSignup: false,

            emailLogin: '',
            passwordLogin: '',
        }
    }

    _onChange(field, e) {
        this.setState({
            [field]: e.target.value
        });
    }

    _onSubmitLogin() {
        this.props.login({ email: this.state.emailLogin, password: this.state.passwordLogin });
    }

    _onSubmitSignUp(e) {
        const { name, email, password } = this.state;
        this.props.register({ name, email, password });
    }

    _showSignup() {
        this.setState({
            showSignup: true,
        })
    }

    render() {
        return (
            <div className="w3-main">
                <div className="w3-row w3-grayscale">
                    <div className="container">
                        <div className="row">
                            <div className="col-25">
                                <div className="row">
                                    <div className="container margin-auto">
                                        <div className="col-25">
                                            <h3>Sign In</h3>
                                            <label htmlFor="ccnum">Email</label>
                                            <input onChange={this._onChange.bind(this, 'emailLogin')} value={this.state.emailLogin} type="email" id="ccnum" name="cardnumber" placeholder="example@gmail.com" required />
                                            <label htmlFor="password">Password</label>
                                            <input onChange={this._onChange.bind(this, 'passwordLogin')} value={this.state.passwordLogin} type="password" id="password" name="expmonth" placeholder="*******" />
                                            <input type="submit" onClick={this._onSubmitLogin.bind(this)} defaultValue="Sign In" className="btn" />
                                            {!this.state.showSignup && <button onClick={this._showSignup.bind(this)} className="btn" >Sign Up</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.showSignup &&
                                <div className="col-25">
                                    <div className="row">
                                        <div className="container margin-auto">
                                            <div className="col-25">
                                                <h3>Register</h3>
                                                <label htmlFor="cname">Name:</label>
                                                <input onChange={this._onChange.bind(this, 'name')} value={this.state.name} type="text" id="cname" name="cardname" placeholder="John More Doe" />
                                                <label htmlFor="ccnum">Email</label>
                                                <input onChange={this._onChange.bind(this, 'email')} value={this.state.email} type="email" id="ccnum" name="cardnumber" placeholder="example@gmail.com" required />
                                                <div className="row">
                                                    <div className="col-50">
                                                        <label htmlFor="password">Password</label>
                                                        <input onChange={this._onChange.bind(this, 'password')} value={this.state.password} type="password" id="password" name="expmonth" placeholder="*******" />
                                                    </div>
                                                    <div className="col-50">
                                                        <label htmlFor="retypePassword">Retype Password</label>
                                                        <input onChange={this._onChange.bind(this, 'retypePass')} value={this.state.retypePass} type="password" id="retypePassword" name="expmonth" placeholder="*******" />
                                                    </div>
                                                </div>
                                                <input type="submit" onClick={this._onSubmitSignUp.bind(this)} defaultValue="Register" className="btn" />
                                            </div>
                                        </div>
                                    </div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        book: state.book,
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => ({
    login: (data) => dispatch(login(data)),
    register: (data) => dispatch(register(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)