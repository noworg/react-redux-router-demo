export const REQUEST_SEND = 'REQUEST_SEND';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAIL = 'REQUEST_FAIL';

function loadData() {
    const request = new Request("js/App/aa.json", {
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