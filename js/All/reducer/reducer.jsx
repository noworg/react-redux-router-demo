/**
 * Created by xiangfahai on 16/7/27.
 */

import { combineReducers } from 'redux';

import {CHANGE_TOGGLE,ROW_DATA} from '../action/action.jsx';

function getInitData(state = [], action) {
    switch (action.type) {
        case ROW_DATA:
            return action.rows;
        //case REQUEST_FAIL:
        //    return action.rows;
        default:
            return state;
    }
}


function toggleActive(state = 0, action) {
    switch (action.type) {
        case CHANGE_TOGGLE:
            return action.active;
        //case REQUEST_FAIL:
        //    return action.rows;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    rows:getInitData,
    active:toggleActive

});

export default rootReducer