import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { store } from '../store/store'
import { Login } from './login'

describe('Login', () => {

    describe('submit btn', () => {
        it('should have disabled attribute when inputs are empty', () => {
            expect.assertions(1);
            render(
                <Provider store={store}>
                    <Router>
                        <Login />
                    </Router>
                </Provider>
            )
            const btnWrapper = screen.getByRole('button', { name: /Login/i })
            expect(btnWrapper.hasAttribute("disabled")).toBe(true)
        })

        it('should have disabled attribute when password is empty ', async () => {
            expect.assertions(1)

            const user = {
                username: 'kfir',
                password: ''
            }

            render(
                <Provider store={store}>
                    <Router>
                        <Login />
                    </Router>
                </Provider>
            )

            const usernameInput = screen.getByPlaceholderText(/Enter username/i)
            const passwordInput = screen.getByPlaceholderText(/Enter password/i)

            fireEvent.change(usernameInput, { target: { value: user.username } })
            fireEvent.change(passwordInput, { target: { value: user.password } })

            const btnWrapper = screen.getByRole('button', { name: /Login/i })
            expect(btnWrapper.hasAttribute("disabled")).toBe(true)
        })

        it('should have disabled attribute when username is empty', async () => {
            expect.assertions(1)
            const user = {
                username: '',
                password: '123456'
            }
            render(
                <Provider store={store}>
                    <Router>
                        <Login />
                    </Router>
                </Provider>
            )

            const passwordInput = screen.getByPlaceholderText('Enter password')
            fireEvent.change(passwordInput, { target: { value: user.password } })
            const btnWrapper = screen.getByRole('button', { name: /Login/i })

            expect(btnWrapper.hasAttribute('disabled')).toBe(true)

        })

        it('should not have disabled attribute submit btn', () => {
            expect.assertions(1)
            const user = {
                username: 'David',
                password: '123456'
            }

            render(
                <Provider store={store}>
                    <Router>
                        <Login />
                    </Router>
                </Provider>
            )

            const usernameInput = screen.getByPlaceholderText('Enter username')
            const passwordInput = screen.getByPlaceholderText('Enter password')

            fireEvent.change(usernameInput, { target: { value: user.username } })
            fireEvent.change(passwordInput, { target: { value: user.password } })

            const btnWrapper = screen.getByRole('button', { name: /Login/i })
            expect(btnWrapper.hasAttribute('disabled')).toBe(false)

        })

    })
})