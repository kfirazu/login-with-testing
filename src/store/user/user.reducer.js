import { userService } from '../../services/user.service.js'

const initialState = {
    user: null,
    errorMsg: null
}
export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'SET_ERROR':
            return { ...state, errorMsg: action.errorMsg }
        default:
            return state
    }

    // For debug:
    // window.userState = newState
    // console.log('State:', newState)
    // return newState
}
