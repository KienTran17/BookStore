import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    renderStar () {
        switch (this.props.rate) {
            case "1":
                return <small className="text-muted">★☆☆☆☆</small>
            case "2":
                return <small className="text-muted">★★☆☆☆</small>
            case "3":
                return <small className="text-muted">★★★☆☆</small>
            case "4":
                return <small className="text-muted">★★★★☆</small>
            case "5":
            default:
                return <small className="text-muted">★★★★★</small>
        }
    }
    render() {
        
        return (
            this.renderStar()
        );
    }
}
export default connect()(Footer);