import { Login } from './views/login.jsx'
import { User } from './views/user.jsx'


const routes = [
    {
        path: '/user',
        component: <User />,
    },
    {
        path: '/',
        component: <Login />,
    },

]

export default routes