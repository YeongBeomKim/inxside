import React, {Component} from 'react';
import connect from 'react-redux';

import {PaintingWriteActions} from 'store/actionCreators';

import PaintingWriteHeader from 'components/PaintingWrite/PaintingWriteHeader';

class PaintingWriteHeaderContainer extends Component {
    onChangeTitle = (e) => {
        const { value } = e.target;
    }
    render() {
        return(
            <PaintingWriteHeader />
        )
    }
}

export default connect(
    (state)=>({
        title: state.title,
        description: state.description,
        paintingUri: state.paintingUri,
        date: state.date
    }),
    ()=>({}),
)(PaintingWriteHeaderContainer);