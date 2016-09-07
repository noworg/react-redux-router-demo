/**
 * Created by xiangfahai on 16/7/27.
 */

import { combineReducers } from 'redux';

import {CHANGE_TOGGLE,ROW_DATA,REQUEST_SUCCESS,REQUEST_FAIL,REQUEST_SEND,SEARCH_REQUEST,TOGGLE_LEFT} from '../action/action.jsx';
import { routerReducer } from 'react-router-redux'

function getMenuData(state = [], action) {
    switch (action.type) {
        case ROW_DATA:
            return action.rows;
        default:
            return state;
    }
}

function getInitData(state = [], action) {
    switch (action.type) {
        case REQUEST_SUCCESS:
            return action.rows;
        case REQUEST_FAIL:
            return action.rows;
        case SEARCH_REQUEST:
            return state;
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

function toggleLeft(state = false, action) {
    switch (action.type) {
        case TOGGLE_LEFT:
            return action.status;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    rows: getMenuData,
    active: toggleActive,
    table: getInitData,
    routing: routerReducer,
    left: toggleLeft
});

export default rootReducer