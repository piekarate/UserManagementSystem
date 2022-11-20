import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

function Dashboard() {

  const navigate = useNavigate()

  const {admin} = useSelector((state) => state.auth)

  useEffect(() => {
    if (!admin) {
      console.log(admin)
      navigate('/login')
    }
  }, [admin, navigate])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard