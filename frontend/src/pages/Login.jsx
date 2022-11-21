import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/admin/authSlice'
import {userLogin, userReset} from '../features/auth/user/authSlice'
import Spinner from '../components/Spinner'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        status: ''
    })

    const {email, password, status} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            email, password
        }
        if (status === 'admin') {
            dispatch(login(userData))
        } else {
            dispatch(userLogin(userData))
        }
    }

    if (isLoading) {
        return <Spinner />
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Login into your account</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit} >
            <ul>
                    <li>
                        <input 
                        type='radio'
                        className='form-control'
                        id='userStatus'
                        name='status'
                        value="user"
                        onChange={onChange} 
                        /> User
                    </li>
                    <li>
                        <input 
                        type='radio'
                        className='form-control'
                        id='adminStatus'
                        name='status'
                        value="admin"
                        onChange={onChange}
                        /> Admin
                    </li>
                </ul>
                <div className='form-group'>
                        <input 
                            type="email" 
                            className='form=control' 
                            id='email' 
                            name='email' 
                            value={email} 
                            placeholder='Enter your email' 
                            onChange={onChange}/>
                </div>
                <div className='form-group'>
                        <input 
                            type="password" 
                            className='form=control' 
                            id='password' 
                            name='password' 
                            value={password} 
                            placeholder='Enter your password' 
                            onChange={onChange}/>
                </div>
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Login