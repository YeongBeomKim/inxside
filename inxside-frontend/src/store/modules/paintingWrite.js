import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';

import { pender } from 'redux-pender';

//ACTION TYPE
const UPLOAD_PAINTING = 'paintingWrite/UPLOAD_PAINTING';
const EDIT_FIELD = 'paintingWrite/EDIT_FIELD';
const CREATE_UPLOAD_URL = 'paintingWrite/CREATE_UPLOAD_URL';
const UPDATE_PAINTING = 'paintingWrite/UPDATE_PAINTING';
const SET_UPLOAD_STATUS = 'paintingWrite/SET_UPLOAD_STATUS';
const SET_IMAGE_URI = 'paintingWrite/SET_IMAGE_URI';
const CHANGE_WRITE_CONTINUE = 'paintingWrite/CHANGE_WRITE_CONTINUE';
//ACTION CREATOR
export const actionCreators = {
    uploadPainting: createAction(UPLOAD_PAINTING, PaintingAPI.uploadPainting),
    editField: createAction(EDIT_FIELD,(value)=>value),
    createUploadUrl: createAction(CREATE_UPLOAD_URL, FilesAPI.createSignedUrl),
    updatePainting: createAction(UPDATE_PAINTING, PaintingAPI.editPainting),
    setUploadStatus: createAction(SET_UPLOAD_STATUS, (uploading) => uploading),
    setImageUri: createAction(SET_IMAGE_URI),
    changeWriteContinue: createAction(CHANGE_WRITE_CONTINUE)
}

//INITIAL STATE
const initialState = Map({
    title: '',
    description: '',
    paintingUri: '',
    date: '',
    paintingData: null,
    upload: Map({
        uploadUrl: null,
        imagePath: null,
        id: null,
        uploading: false
    }),
    writeContinueStatus: false,
})

// REDUCER
export default handleActions({
    ...pender({
        type: UPLOAD_PAINTING,
        onSuccess: (state,action) => {
            const data = action.payload.data;
            return state.set('paintingData',data);
        }
    }),
    ...pender({
        type: UPDATE_PAINTING,
        onSuccess: (state,action) => {
            const data = action.payload.data;
            return state.set('paintingData',data);
        }
    }),
    [EDIT_FIELD]: (state,action) => {
        const { field, value } = action.payload;
        return state.set(`${field}`,value);
    },
    [SET_UPLOAD_STATUS]: (state,action) => {
        const {uploading} = action.payload;
        return state.setIn(['upload','uploading'], uploading)
    },
    [SET_IMAGE_URI]: (state,action) => {
        const paintingUri = action.payload;
        return state.set('paintingUri', paintingUri);
    },
    [CHANGE_WRITE_CONTINUE]: (state,action) => {
        const writeContinueStatus = !action.payload;
        return state.set('writeContinueStatus', writeContinueStatus);
    },
    ...pender({
        type: CREATE_UPLOAD_URL,
        onSuccess: (state,action) => {
            const data = action.payload.data;
            return state.setIn(['upload','uploadUrl'], data.url)
                        .setIn(['upload','imagePath'], data.imagePath)
                        .setIn(['upload','id'], data.id)
        },
    }),
}, initialState);