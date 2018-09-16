import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';

import { pender } from 'redux-pender';

//ACTION TYPE
const GET_PAINTINGS = 'paintings/GET_PAINTINGS';
//ACTION CREATOR
export const actionCreators = {
    getPaintings: createAction(GET_PAINTINGS, PaintingAPI.parsePaintings),
}
//INITIAL STATE
const initialState = Map({
    paintings: null
})
// REDUCER
export default handleActions({
    ...pender({
        type: GET_PAINTINGS,
        onSuccess: (state,action) => {
            const data = action.payload.data;
            return state.set('paintings',data);
        }
    })
}, initialState);