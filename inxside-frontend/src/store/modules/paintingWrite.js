import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import produce from 'immer';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';
import { applyPenders } from 'lib/common';

import { pender } from 'redux-pender';

//ACTION TYPE
const UPLOAD_PAINTING = 'painting/UPLOAD_PAINTING';
const EDIT_FIELD = 'painting/EDIT_FIELD';

//ACTION CREATOR
export const actionCreators = {
    uploadPainting: createAction(UPLOAD_PAINTING, PaintingAPI.uploadPainting),
    editField: createAction(EDIT_FIELD,(value)=>value),
}

//INITIAL STATE
const initialState = Map({
    title: '',
    description: '',
    paintingUri: '',
    date: '',
})

// REDUCER
export default handleActions({
    ...pender({
        type: UPLOAD_PAINTING,
        onSuccess: (state,action) => {
            const {title, description, paintingUri, date} = action.payload;
            console.log(action.payload);
            return state.set('title',title)
                        .set('description',description)
                        .set('paintingUri',paintingUri)
                        .set('date',date)
        }
    }),
    [EDIT_FIELD]: (state,action) => {
        const { field, value } = action.payload;
        return state.set(`${field}`,value);
    },
}, initialState);