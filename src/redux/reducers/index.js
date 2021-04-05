import { GET_SEARCH_RESULTS, INSUFFICIENT_SEARCH_CHAR } from "../constants/constants"

const initialState = {
    result: [],
    placeholder: ''
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case INSUFFICIENT_SEARCH_CHAR:
            return {
                ...state,
                placeholder: action.payload
            }
        case GET_SEARCH_RESULTS:
            return {
                ...state,
                result: action.payload,
                placeholder: ''
            }
        default:
            return state
    }
}

export default reducer