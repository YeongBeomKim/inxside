import {bindActionCreators} from 'redux';
import store from './index';

import { actionCreators as paintingWriteActions } from './modules/paintingWrite';
import { actionCreators as paintingsActions} from './modules/paintings';
import { actionCreators as baseActions} from './modules/base';

const {dispatch} = store;

export const PaintingWriteActions = bindActionCreators(paintingWriteActions, dispatch);
export const PaintingsActions = bindActionCreators(paintingsActions, dispatch);
export const BaseActions = bindActionCreators(baseActions, dispatch);