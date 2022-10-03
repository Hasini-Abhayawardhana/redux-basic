import { FETCH_BUTTON_CLICK } from '../actions/Types'

export default function (state=null, action){
    switch(action.type){
        case FETCH_BUTTON_CLICK:
            return action.payload;
            break;
    }
    return state
}