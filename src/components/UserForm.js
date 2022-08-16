import { LockClosedIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { login, signup } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/reducers/loggedInSlice'

export default function UserForm({ loginForm }) {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()


    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        try {
            login(data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setData({
                email: '',
                password: ''
            })
            dispatch(logIn())
            navigate('/')
        }
    }

    const handleSignup = (e) => {
        e.preventDefault()
        try {
            signup(data)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setData({
                email: '',
                password: '',
                username: ''
            })
            dispatch(logIn())
            navigate('/')
        }
    }

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <div>
                <img
                className="mx-auto h-12 w-auto"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2F1536692904.png&f=1&nofb=1"
                alt="cannabis"
                />
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{loginForm ? "Sign in to your account": "Create an account"}</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to={loginForm ? "/signup" : "/login"} className="font-medium text-emerald-600 hover:text-emerald-500">
                    {loginForm ? "sign up with a new account" : "login to your account"}
                </Link>
                </p>
            </div>

              

            <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                {!loginForm ? 
                    <div>
                        <label htmlFor="username" className="sr-only">
                        Username
                        </label>
                        <input
                        id="username"
                        name="username"
                        type="username"
                        autoComplete="username"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                        placeholder="Username"
                        onChange={handleChange}
                        />
                    </div>
                    :
                    null
                }
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className={`${loginForm ? 'rounded-t-md' : ''} appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                    value={data.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={data.password}
                    onChange={handleChange}
                    />
                </div>
                </div>

                <div className="flex items-center justify-between">
                {loginForm ? 
                    <div className="text-sm">
                        <a href="/" className="font-medium text-emerald-600 hover:text-emerald-500">
                        Forgot your password?
                        </a>
                    </div>
                    :
                    null
                }
                </div>

                <div>
                <button
                    onClick={loginForm ? handleLogin : handleSignup}
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-emerald-500 group-hover:text-emerald-400" aria-hidden="true" />
                    </span>
                    {loginForm ? "Sign in" : "Sign up"}
                </button>
                </div>
            </form>
            </div>
        </div>
    </>
    )
}