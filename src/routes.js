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
  
    // {
    //     path: 'board/:boardId',
    //     component: <Board />,
    //     nestedRoute: {
    //         path: 'group/:groupId/task/:taskId',
    //         component: <TaskDetails />,
    //     }
    // },
    // {
    //     path: 'login',
    //     component: <LoginSignup />,
    // },
    // {
    //     path: 'user/:id',
    //     component: <UserProfile />,
    // }
]

export default routes