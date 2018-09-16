import React, { Component, Fragment } from 'react';
import {BaseActions} from 'store/actionCreators';
import throttle from 'lodash/throttle';

class Core extends Component {
    constructor(props) {
        super(props);
        this.setWidth();
    }
    setWidth = () => {
        if (typeof window === 'undefined') return;
        BaseActions.setWidth(window.outerWidth);
    };
    onResize = throttle(() => {
        this.setWidth();
    }, 250);

    initialize = async () => {
        window.addEventListener('resize', this.onResize);
    };
    componentDidMount() {
        this.initialize();
    }
    render() {
        return (
            <Fragment>

            </Fragment>
        );
    }
}

export default Core;