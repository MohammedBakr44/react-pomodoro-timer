import { AnyAction, Reducer } from "redux";
import { DECREMENT_SECONDS } from "./actions";

// const initialState = {
//     timer: 25,
//     seconds: 59,
//     pomodoros: 0
// }
const initialState = {
    seconds: 59
}

const reducer: Reducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case DECREMENT_SECONDS:
            return { ...state, seconds: state.seconds - 1 }
    }
}

export default reducer;