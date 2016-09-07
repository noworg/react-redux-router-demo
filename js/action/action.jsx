//menu
export const ROW_DATA = 'ROW_DATA';
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE';

//table
export const REQUEST_SEND = 'REQUEST_SEND';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const TOGGLE_LEFT = 'TOGGLE_LEFT'
//menu
export function menuData() {

    return {
        type: ROW_DATA,
        rows: [{id: 1, title: '首页',url:'/home'}, {id: 2, title: '统计',url:'/about'}]
    }
}

export function toggle(index) {
    return {
        type: CHANGE_TOGGLE,
        active: index
    }
}

export function toggleLeft(status){
    return {
        type: TOGGLE_LEFT,
        status: status
    }
}
//table

function loadData() {
    const request = new Request("./js/aa.json", {
        method: "GET",
        mode: "no-cors"
    });
    return fetch(request);
}
function successLoad(rows) {
    return {
        type: REQUEST_SUCCESS,
        rows
    };
}


function failLoad(rows) {
    return {
        type: REQUEST_FAIL,
        rows
    };
}


export function fetchData() {
    return function(dispatch){
        return loadData().then(
            function(res){
                if (res.ok) {
                    res.json().then(function (data) {
                        const row = {
                            rows:data.rows,
                            state:true,
                            page:data.page
                        }
                        return dispatch(successLoad(row))
                    });
                }else {
                    alert("获取失败")
                    return dispatch(failLoad([]))
                }
            },  function(e){
                console.log("error",e)
            }
        )
    };
}

export function send() {
    return {
        type: REQUEST_SEND,
        rows: []
    }
}

export function search(text) {
    alert(text)
    return {
        type: SEARCH_REQUEST,
        rows: []
    }
}