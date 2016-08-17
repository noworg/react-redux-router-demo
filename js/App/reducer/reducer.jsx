/**
 * Created by xiangfahai on 16/7/27.
 */

import { combineReducers } from 'redux';

import {REQUEST_SUCCESS,REQUEST_FAIL,REQUEST_SEND} from '../action/action.jsx';

function getInitData(state = [], action) {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return action.rows;
        case REQUEST_FAIL:
            return action.rows;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    table:getInitData,

});

export default rootReducer