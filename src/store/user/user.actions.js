import { userService } from "../../services/user.service.js";

const _setUser = (user) => ({ type: 'SET_USER', user })
const _setError = (err) => ({ type: 'SET_ERROR', err })

export function doLogin({ username, password }) {

    return async dispatch => {
        try {
            const loggedInUser = await userService.login(username, password)
            dispatch(_setUser(loggedInUser))
            return loggedInUser
        } catch (err) {
            dispatch(_setError('Username or password is incorrect, please try again'))
        }
    }
}

export function resetErrorMsg() {
    return dispatch => {
        dispatch(_setError(null))
    }
}
