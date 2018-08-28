import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PaintingWriteActions} from 'store/actionCreators';
import axios from 'axios';
import PaintingWriteHeader from 'components/PaintingWrite/PaintingWriteHeader';
import PaintingWriteConfigureImage from 'components/PaintingWrite/PaintingWriteConfigureImage';
import WriteContinueModalBox from 'components/PaintingWrite/WriteContinueModalBox';

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
    }
    onChangeDate = (e) => {
        const { value } = e.target;
        PaintingWriteActions.editField({
            field: 'date',
            value,
        });
    }
    onSubmit = async () => {
        const {title, description, paintingUri, date, paintingData, continueStatus } = this.props;
        try {
            if(!paintingData){
                await PaintingWriteActions.uploadPainting({
                    title,
                    description,
                    paintingUri,
                    date,
                    is_temp: false
                });
            } else {
                await PaintingWriteActions.updatePainting({
                    id: paintingData._id,
                    title,
                    description,
                    paintingUri,
                    date,
                    is_temp: false
                });
            }
            PaintingWriteActions.changeWriteContinue(continueStatus);
        } catch (e) {
            console.log(e);
        }
    }
    uploadImage = async (file) => {
        if(!this.props.paintingData){
            const {title, description, paintingUri, date} = this.props;
            try{
                await PaintingWriteActions.uploadPainting({
                    title,
                    description,
                    paintingUri,
                    date,
                    is_temp: true
                });
            } catch(e){
                console.log(e);
            }
        };
        if(!this.props.paintingData) return;
        const { _id } = this.props.paintingData
        try{
            await PaintingWriteActions.createUploadUrl({paintingId: _id, filename: file.name});
            PaintingWriteActions.setUploadStatus({uploading: true});
            if(!this.props.uploadUrl) return;
            await axios.put(this.props.uploadUrl, file, {
                header: {
                    'Content-Type': file.type,
                },
                withCredentials: false,
                onUploadProgress: (e) => {
                    if (window.nanobar) {
                      window.nanobar.go(e.loaded / e.total * 100);
                    }
                  },
            });
            if(!this.props.imagePath) return;
            PaintingWriteActions.setImageUri(`https://s3.ap-northeast-2.amazonaws.com/inxside/${this.props.imagePath}`);
        } catch(e){
            console.log(e);
        }
    }
    onUploadClick = async () => {
        const upload = document.createElement('input');
        upload.type = 'file';
        upload.onchange = (e) => {
            upload.file = e.path;
            if(!upload.file) return;
            const file = upload.files[0];
            this.uploadImage(file);
        };
        upload.click();
    };
    onClearImage = async () => {
        PaintingWriteActions.setImageUri(null);
    };
    onRedirectToPainting = async () => {
    };
    render() {
        const {
            onSubmit,
            onChangeTitle,
            onChangeDescription,
            onChangeDate,
            onUploadClick,
            onClearImage,
            onRedirectToPainting
        } = this; 
        const {
            title,
            description,
            date,
            paintingUri,
            writeContinueStatus
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
                configureImage = {
                    <PaintingWriteConfigureImage 
                        onUploadClick = {onUploadClick}
                        onClearImage = {onClearImage}
                        paintingUri = {paintingUri}
                    />
                }
                writeContinueModalBox = {
                    writeContinueStatus && (
                        <WriteContinueModalBox
                            onRedirectToPainting = {onRedirectToPainting}
                        />
                    )
                }
            />
        )
    }
}

export default connect(
    (state)=>({
        title: state.paintingWrite.get('title'),
        description: state.paintingWrite.get('description'),
        paintingUri: state.paintingWrite.get('paintingUri'),
        date: state.paintingWrite.get('date'),
        paintingData: state.paintingWrite.get('paintingData'),
        uploadUrl: state.paintingWrite.getIn(['upload','uploadUrl']),
        imagePath: state.paintingWrite.getIn(['upload','imagePath']),
        writeContinueStatus: state.paintingWrite.get('writeContinueStatus')
    }),
    ()=>({}),
)(PaintingWriteHeaderContainer);