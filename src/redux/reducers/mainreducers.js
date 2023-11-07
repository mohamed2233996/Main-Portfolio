// import { combineReducers } from "redux";
import { TOGOLE } from "../actions/types"

const mainReducer = (state ={openvalue: false }, action) =>{
    switch(action.type){
        case TOGOLE:
            return {...state,
                openvalue: !state.openvalue};

        default:
            return state;
    }

    return state
}

export default mainReducer