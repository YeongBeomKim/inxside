import React, {Component} from 'react';
import {connect} from 'react-redux';

import {PaintingWriteActions} from 'store/actionCreators';

import PaintingWriteHeader from 'components/PaintingWrite/PaintingWriteHeader';

class PaintingWriteHeaderContainer extends Component {
    onChangeTitle = (e) => {
        const { value } = e.target;
    }
    onSubmit = async () => {
        const {title, description, paintingUri, date} = this.props;
        console.log(title);
        try {
            PaintingWriteActions.uploadPainting({
                title,
                description,
                paintingUri,
                date
            });
        } catch (e) {
            console.log(e);
        }

    }
    render() {
        const {
            onSubmit,
        } = this; 
        return(
            <PaintingWriteHeader 
                onSubmit= {onSubmit}
            />
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