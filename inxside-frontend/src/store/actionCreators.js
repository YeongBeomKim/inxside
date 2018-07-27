import {bindActionCreators} from 'redux';
import store from './index';

import { actionCreators as paintingWriteActions } from './modules/paintingWrite';

const {dispatch} = store;

export const PaintingWriteActions = bindActionCreators(paintingWriteActions, dispatch);
