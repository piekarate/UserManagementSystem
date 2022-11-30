import FormForm from '../components/FormForm'
import {useSelector} from 'react-redux'

function CreateForm() {

  const {user} = useSelector((state) => state.auth)
  
  return (
    <>
    {user.privileges ? (
        <div>Not for you</div>
    ) : (
        <FormForm />
    )}
    </>
    
  )
}

export default CreateForm