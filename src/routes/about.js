import React, { Component } from 'react';
import Radium from 'radium';

class About extends Component {

    h2style = {
        color: 'blue',
        fontSize: 'x-large',
        textAlign: 'center',
        ":hover": {
            color: "green"
        },
        "@media screen and (min-width: 480px)": {
            backgroundColor: 'yellow'
        }
    }

    render() {
        return (
            <h2 style={this.h2style}>About Gaur Associates</h2>
        );
    }
}
export default Radium(About);
