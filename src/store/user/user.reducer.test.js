import { userReducer } from "./user.reducer";

describe('user reducer', () => {
    const mockUser = { username: 'Bobby', email: 'bobby@gmail.com', id: 'i101' }
    const initialState = {
        user: null,
        errMsg: null
    }

    it('Creates initial state', async () => {
        const state = userReducer(initialState)
        expect(state).toBe(initialState)
    })

    it('Should set a user in the state', async () => {
        let state = userReducer(initialState)
        expect(state.user).toBeFalsy()

        state = userReducer(initialState, { type: 'SET_USER', user: mockUser })
        expect(state.user).toBeTruthy()
        expect(state.errMsg).toBeFalsy()
    })
    it('Should set an error message in the state', async () => {
        let state = userReducer(initialState)
        expect(state.errMsg).toBeFalsy()

        state = userReducer(initialState, {type: 'SET_ERROR', errMsg: 'an error'})
        expect(state.errMsg).toBeTruthy()
        expect(state.errMsg).toBe('an error')
        expect(state.user).toBeFalsy()
    })
})