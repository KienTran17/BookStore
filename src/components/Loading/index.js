import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
    
    render() {
        
        return (
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: '#f54',
                zIndex: 999,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <ReactLoading type="bubbles" color="#000" height={300} width={300} /> 
            </div>
        );
    }
}
export default Loading;