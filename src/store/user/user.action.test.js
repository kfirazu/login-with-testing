import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { userService } from '../../services/user.service'
import { doLogin } from './user.actions'

jest.mock('../../services/user.service')

describe('user actions', () => {
    let mockStore, store

    const authUser = { username: 'Bobby', password: '123456' }
    const mockUser = { username: 'Dan', email: 'dan@gamil.com', id: ' 101' }

    beforeEach(() => {
        const middlewares = [thunk]
        userService.login.mockReset()
        mockStore = configureMockStore(middlewares)
        store = mockStore({})

    })

    it('Creates SET_USER when login success', async () => {
        const httpResponse = mockUser
        userService.login.mockResolvedValue(httpResponse)

        await store.dispatch(doLogin(authUser))

        const action = store.getActions()[0]
        expect(action.type).toBe('SET_USER')
    })

    it('Creates SET_ERROR when login fail', async () => {
        const httpResponse = {}
        userService.login.mockRejectedValue(httpResponse)

        await store.dispatch(doLogin(authUser))
        const action = store.getActions()[0]
        console.log('action:', action)
        expect(action.type).toBe('SET_ERROR')

    })
})