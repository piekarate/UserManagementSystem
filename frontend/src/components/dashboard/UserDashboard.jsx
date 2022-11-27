import FormForm from '../FormForm'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getForms, reset } from '../../features/forms/formSlice'
import FormItem from '../FormItem'


const UserDashboard = ({ user }) => {

  const dispatch = useDispatch()

  const {forms, isLoading, isError, message} = useSelector((state) => state.forms)

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

      <FormForm />

      <section className='content'>
        {forms.length > 0 ? (
          <div className="forms">
            {forms.map((form) => (
              <FormItem key={form._id} form={form}/>
            ))}
          </div>
        ) : (<h3> You have not completed any forms </h3>)}
      </section>
    </>
  )
}

export default UserDashboard