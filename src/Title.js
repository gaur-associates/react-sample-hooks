

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    render () {
        return (<h1 style={{textAlign : 'center'}}> {this.props.name()} </h1>)
    }
}
Title.propTypes = {
    name : PropTypes.func
}

export default Title;