import { createAction, handleActions } from 'redux-actions';
import {Map} from 'immutable';
import * as PaintingAPI from 'lib/api/painting';
import * as FilesAPI from 'lib/api/files';

import { pender } from 'redux-pender';

//ACTION TYPE
const SET_WIDTH = 'base/SET_WIDTH';
//ACTION CREATOR
export const actionCreators = {
    setWidth: createAction(SET_WIDTH, width=>width),
}
//INITIAL STATE
const initialState = Map({
    windowWidth: 1920, 
})
// REDUCER
export default handleActions({
    [SET_WIDTH]: (state,action) => {
        const width = action.payload
        return state.set('windowWidth',width)
    }
}, initialState);