import React, {Component} from 'react';
import { connect } from 'react-redux';

import {PaintingWriteActions} from 'store/actionCreators';

import PaintingWriteHeader from 'components/PaintingWrite/PaintingWriteHeader';

class PaintingWriteHeaderContainer extends Component {
    onChangeTitle = (e) => {
        const { value } = e.target;
        PaintingWriteActions.editField({
            field: 'title',
            value,
        });
    }
    onChangeDescription = (e) => {
        const { value } = e.target;
        PaintingWriteActions.editField({
            field: 'description',
            value,
        });
        console.log(this.props);
    }
    onChangeDate = (e) => {
        const { value } = e.target;
        PaintingWriteActions.editField({
            field: 'date',
            value,
        });
    }
    onSubmit = async () => {
        const {title, description, paintingUri, date} = this.props;
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
            onChangeTitle,
            onChangeDescription,
            onChangeDate,
        } = this; 
        const {
            title,
            description,
            date,
            paintingUri
        } = this.props;
        return(
            <PaintingWriteHeader 
                onSubmit = {onSubmit}
                onChangeTitle = {onChangeTitle}
                onChangeDescription = {onChangeDescription}
                onChangeDate = {onChangeDate}
                title = { title }
                description = { description }
                date = { date }
                paintingUri = { paintingUri } 
            />
        )
    }
}

export default connect(
    (state)=>({
        title: state.paintingWrite.get('title'),
        description: state.paintingWrite.get('description'),
        paintingUri: state.paintingWrite.get('paintingUri'),
        date: state.paintingWrite.get('date')
    }),
    ()=>({}),
)(PaintingWriteHeaderContainer);