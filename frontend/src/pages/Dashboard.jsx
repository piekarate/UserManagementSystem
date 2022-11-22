import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

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
        <div>Admin Dashboard</div>
      ) : (
        <div>User Dashboard</div> 
      )}
    </>
  )
}

export default Dashboard