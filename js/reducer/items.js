/**
 * Created by Administrator on 2016/8/15.
 */
import Immutable from "immutable"

const initialItems = Immutable.List([]);

export default function items(state = initialItems, action) {
    var newEr = state;
    switch(action.type) {
        case "FRESH":
           newEr = state.push(action);
        break;
        case "DELETE":
            newEr =  state.delete(state.indexOf(action));
            break;
        case "RESET":
            newEr = state.concat(action.data);
            break;
        case "SET":
            newEr = state.concat(action.data);
            break;
        default:
            //
        break;
    }
    return newEr;
}

