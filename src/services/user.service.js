// import { storageService } from './async-storage.service'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
// import { showSuccessMsg } from '../services/event-bus.service'

import { httpService } from "./http.service.js"

export const userService = {
    login
}
const userCache = {}

async function login(username, password) {
    if (userCache[username]) {
        console.log('No need to fetch, retrieving from cache')
        return Promise.resolve((userCache[username]))
    }

    const res = await httpService.post('/login', { username, password })
    userCache[username] = res
    return res
}



