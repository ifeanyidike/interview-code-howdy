import {
    GET_SEARCH_RESULTS,
    INSUFFICIENT_SEARCH_CHAR
} from '../constants/constants'
import data from '../../data'

export const getSearchResults = (numOfChar, text) => (dispatch) => {
    if (numOfChar < 3) {
        dispatch({
            type: INSUFFICIENT_SEARCH_CHAR,
            payload: "Please type at least 3 characters"
        })
    } else {
        //filter results from our list. 
        //select data where title (in lower case) matches our text (in lower case)
        const result = data.filter(d => d.title.toLowerCase().includes(text.toLowerCase()))

        dispatch({
            type: GET_SEARCH_RESULTS,
            payload: result
        })
    }

}