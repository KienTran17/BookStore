import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { connect } from 'react-redux';
import Home from './components/site/Home';
import Cart from './components/site/Cart';
import Loading from './components/Loading';


function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}

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
        const token = getCookie('tk');
        return (
            <BrowserRouter basename="/">
                <div>
                    <header>
                        <Header isAuthen={this.props.isAuthen} />
                    </header>
                    { sending && <Loading /> }
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/cart" render={() => <Cart />} />
                    <footer> 
                        <Footer isAuthen={this.props.isAuthen} />
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
}
export default connect(state => state)(App)
