import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { getCookie } from '../helper';
import { ToastContainer } from 'react-toastify';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { connect } from 'react-redux';
import Home from './components/site/Home';
import Cart from './components/site/Cart';
import SignUp from './components/site/SignUp';
// import Cart from './components/site/SignUp';
import Loading from './components/Loading';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            asyncRequest: {
                sending
            }
        } = this.props;
        const token = getCookie('token');
        return (
            <BrowserRouter basename="/">
                <div>
                    { sending && <Loading /> }
                    <header>
                        <Header isAuthen={this.props.isAuthen} />
                    </header>
                    <ToastContainer closeOnClick={false} />
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/cart" render={() => <Cart />} />
                    <Route path="/sign-up" render={() => token ? <Redirect to="/" /> : <SignUp />} />
                    {/* <Route path="/sign-in" render={() => <Cart />} /> */}
                    <footer> 
                        <Footer isAuthen={this.props.isAuthen} />
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(state => state)(App)
