export const ROW_DATA = 'ROW_DATA';
export const CHANGE_TOGGLE = 'CHANGE_TOGGLE';


export function fetchData() {

    return {
        type: ROW_DATA,
        rows: [{id: 1, title: '首页'}, {id: 2, title: '统计'}]
    }
}

export function toggle(index) {
    return {
        type: CHANGE_TOGGLE,
        active: index
    }
}