import { ALLBLOGS, AUTHOR, CATEGORY, INPUT_VALUE } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALLBLOGS:
            return {
                ...state,
                filters: {
                    ...state,
                    category: 'all',
                    authorName: 'all',
                    input_value: ''
                }

            }
        case CATEGORY:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    category: action.payload
                }
            }
        case AUTHOR:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    authorName: action.payload
                }
            }
        case INPUT_VALUE:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    input_value: action.payload
                }
            }
        default:
            return state;
    }
}
export default reducer;