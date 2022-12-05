import { httpService } from "./http.service";
import { userService } from "./user.service";

jest.mock('./http.service')

const mockUser = {
    "_id": "611bd791c134694044526f88",
    "username": "Isabel",
    "name": "Nixon Caldwell",
}

const mockCred = { username: mockUser.username, password: '123456' }

describe('user service', () => {
    beforeEach(() => {
        httpService.post.mockReset()
    })

    it('Should login successfully', async () => {
        expect.assertions(2)

        const httpResponse = mockUser
        httpService.post.mockResolvedValue(httpResponse)

        const res = await userService.login(mockCred.username, mockCred.password)
        expect(res).toBe(mockUser)
        expect(httpService.post).toBeCalled()
    })

    it('Should load user from cache', async () => {
        expect.assertions(4)

        const mockUser2 = {
            "_id": "611bd79114eacde7db758e4d",
            "username": "Meadows",
            "name": "Oneil Wilson",
        }
        const mockCred2 = { username: mockUser2.username, password: '123456' }

        const httpResponse = mockUser2
        httpService.post.mockResolvedValue(httpResponse)

        const res1 = await userService.login(mockCred2.username, mockCred2.password)
        expect(httpService.post).toHaveBeenCalledTimes(1)
        expect(res1).toBe(mockUser2)

        const res2 = await userService.login(mockCred2.username, mockCred2.password)
        expect(httpService.post).toHaveBeenCalledTimes(1)
        expect(res2).toBe(mockUser2)
    })
})