import {useDispatch} from 'react-redux'
import {deleteForm} from '../features/forms/formSlice'

function FormItem({form}) {

    const dispatch = useDispatch()
  return (
    <div className="goal">
        <div>
            {new Date(form.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{form.text}</h2>
        <button onClick={() => dispatch(deleteForm(form._id))} className="close">X</button>
    </div>
  )
}

export default FormItem