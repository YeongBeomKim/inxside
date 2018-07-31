import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import produce from 'immer';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';
import { applyPenders } from 'lib/common';

import { pender } from 'redux-pender';

//ACTION TYPE
const UPLOAD_PAINTING = 'painting/UPLOAD_PAINTING';

//ACTION CREATOR
export const actionCreators = {
    uploadPainting: createAction(UPLOAD_PAINTING, PaintingAPI.uploadPainting),
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
            return produce(state,(draft) => {
                draft.title = title;
                draft.description = description;
                draft.paintingUri = paintingUri;
                draft.date = date;
            });
        }
    })
}, initialState);