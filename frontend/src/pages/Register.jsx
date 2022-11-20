import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/admin/authSlice'
import {userRegister, userReset} from '../features/auth/user/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        adminEmail: '',
        password: '',
        password2: '',
        status: ''
    })

    const {name, email, adminEmail, password, password2, status} = formData

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

    // useEffect(() => {
    //   console.log(status)
    // }, [status])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()

        if (password !== password2) {
            toast.error("Passwords do not match")
        } else {

          if(status === 'admin') {

            const userData = {
                name, 
                email, 
                password
            }
            dispatch(register(userData))
          } else {
            const userData = {
                name, 
                email,
                adminEmail,
                password
            }
            dispatch(userRegister(userData))
          }
      }
    }
    

    if (isLoading) {
        return <Spinner />
    }

  return (
    <>
        <section className="heading">
            <h1>
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
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
                {/*  */}
                {(status === 'admin') ? (
                    <>
                    <div className='form-group'>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='name' 
                                name='name' 
                                value={name} 
                                placeholder='Enter your name' 
                                onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                            <input 
                                type="email" 
                                className='form-control' 
                                id='email' 
                                name='email' 
                                value={email} 
                                placeholder='Enter your email' 
                                onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password' 
                                name='password' 
                                value={password} 
                                placeholder='Enter your password' 
                                onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password2' 
                                name='password2' 
                                value={password2} 
                                placeholder='Confirm your password' 
                                onChange={onChange}/>
                    </div>
                    </>
                ) : (
                    <>
                    <div className='form-group'>
                            <input 
                                type="text" 
                                className='form-control' 
                                id='name' 
                                name='name' 
                                value={name} 
                                placeholder='Enter your name' 
                                onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                    <input 
                        type="email" 
                        className='form-control' 
                        id='email' 
                        name='email' 
                        value={email} 
                        placeholder='Enter your email' 
                        onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                    <input 
                        type="email" 
                        className='form-control' 
                        id='adminEmail' 
                        name='adminEmail' 
                        value={adminEmail} 
                        placeholder="Enter your admin's email" 
                        onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password' 
                                name='password' 
                                value={password} 
                                placeholder='Enter your password' 
                                onChange={onChange}/>
                    </div>
                    <div className='form-group'>
                            <input 
                                type="password" 
                                className='form-control' 
                                id='password2' 
                                name='password2' 
                                value={password2} 
                                placeholder='Confirm your password' 
                                onChange={onChange}/>
                    </div>    
                    </>
                )}

                {/*  */}
                <div className="form-group">
                    <button type="submit" className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
  )
}

export default Register