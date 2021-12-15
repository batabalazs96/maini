import { TestAction } from "../actions/mainActions"

export type ActionTypes = { type: string, payload?: any };

const initialState = {
    testStateProp: 0,
}

const mainReducer = (state: typeof initialState = initialState, action: ActionTypes) => {
    switch (action.type) {

        case TestAction:
            return {
                ...state,
                testStateProp: state.testStateProp + 1,
            }

        default:
            return state
    }
}

export default mainReducer;