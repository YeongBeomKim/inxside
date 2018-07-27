import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';

//ACTION TYPE
const UPLOAD_PAINTING = 'painting/UPLOAD_PAINTING';

//ACTION CREATOR
export const actionCreators = {
    uploadPainting: createAction(UPLOAD_PAINTING, PaintingAPI.uploadPainting),
}

//INITIAL STATE
const initialState = Map({
    title: null,
    description: null,
    paintingUri: null,
    date: null
})

// REDUCER
export default handleActions({
    [UPLOAD_PAINTING]: (state, action) => {
        const { title, description, paintingUri, date} = action.payload;
        return state.set('title', title)
                    .set('description',description)
                    .set('paintingUri',paintingUri)
                    .set('date',date)
    },
}, initialState)