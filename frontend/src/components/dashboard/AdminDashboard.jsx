import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getUsers } from "../../features/users/usersSlice"
import UserItem from '../UserItem'


const AdminDashboard = ({ user }) => {

  const dispatch = useDispatch()

  const {users, isLoading, isError, message} = useSelector((state) => state.adminResources)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getUsers())
  }, [user, isError, message, dispatch])

  return (
    <>
     <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Dashboard</p>
      </section>

      <section className='content'>
        {users.length > 0 ? (
          <div className="forms">
            {users.map((user) => (
              // console.log(user)
                <UserItem key={user._id} user={user}/>
            ))}
          </div>
        ) : (<h3> You don't have any users </h3>)}
      </section>
    </>
  )
}

export default AdminDashboard