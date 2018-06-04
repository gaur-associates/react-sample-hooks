npm install -S radium

import Radium from 'radium';

    h2style = {
        color: 'blue',
        fontSize: 'x-large',
        ":hover": {
            color: "green"
            },
        "@media screen and (min-width: 480px)": {
            backgroundColor: 'lightgreen'
        }
    }

export default Radium(Html);

import {StyleRoot} from 'radium';

