import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import AdminDashboard from '../components/dashboard/AdminDashboard'
import UserDashboard from '../components/dashboard/UserDashboard'

function Dashboard() {

  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate])

  return (
    <>
      {user && user.privileges ? (  
        <AdminDashboard user={user}/>
      ) : (
        <UserDashboard user={user}/>   
      )}
    </>
  )
}

export default Dashboard