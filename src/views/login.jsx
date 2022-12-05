import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { UserMsg } from '../cmps/user-msg';
import { useFormRegister } from '../hooks/useFormRegister';
import { doLogin, resetErrorMsg } from "../store/user/user.actions";
import { useEffect } from 'react';

export const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [register, setUser, user] = useFormRegister({
        username: '',
        password: ''
    })

    const isDisabled = (user.username && user.password) ? false : true

    // useEffect(() => {
    //     console.log('user from cmp use effect',user)
    // }, [user])

    const onSubmitForm = async (ev) => {
        ev.preventDefault()
        try {
            const loggedInUser = await dispatch(doLogin(user))
            console.log('loggedInUser:', loggedInUser)
            setUser({ username: '', password: '' })
            if(loggedInUser) navigate('/user')
        } catch (err) {
            console.error('Error:', err)
        }

    }

    const onResetErrorMsg = () => {
        dispatch(resetErrorMsg())
    }

    return (
        <section className="login">
            <h1 className="title">Sign-in</h1>
            <form className="login-form" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="username-input"
                    autoFocus
                    required
                    {...register('username', 'text')}
                    placeholder="Enter username"
                    onFocus={onResetErrorMsg}
                />
                <input
                    type="password"
                    className="password-input"
                    required
                    {...register('password', 'password')}
                    placeholder="Enter password"
                    onFocus={onResetErrorMsg}
                />
                <UserMsg />
                <button className="btn-login" disabled={isDisabled} onClick={onSubmitForm}>Sign-in</button>
            </form>
        </section>
    )
}