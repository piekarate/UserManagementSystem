import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'
import { getForms, reset } from '../../features/forms/formSlice'
import FormItem from '../FormItem'


const UserDashboard = ({ user }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {forms, isLoading, isError, message} = useSelector((state) => state.userResources)

  useEffect(() => {
    if(isError) {
      console.log(message)
    }
  
    dispatch(getForms())

    return () => {
      dispatch(reset)
    }
  }, [user, isError, message, dispatch])
  
  if (isLoading) {
    
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>

      <section className='content'>
        {forms.length > 0 ? (
          <div className="forms">
            {forms.map((form) => (
              <div onClick={() => {navigate('/editForm', {state: {
                form: form
              }})}}>
                <FormItem key={form._id} form={form}/>
              </div>
            ))}
          </div>
        ) : (<h3> You have not completed any forms </h3>)}
      </section>
    </>
  )
}

export default UserDashboard