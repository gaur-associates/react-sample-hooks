import React, { Component } from 'react';

class About extends Component {

    h2style = {
        color: 'blue',
        fontSize: 'x-large',
        textAlign: 'center'
    }

    render() {
        return (
            <h2 style={this.h2style}>About Gaur Associates</h2>
        );
    }
}
export default About;
