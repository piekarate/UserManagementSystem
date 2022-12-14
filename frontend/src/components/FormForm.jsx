import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createForm} from '../features/forms/formSlice'
import {useNavigate} from 'react-router-dom'

function FormForm() {

  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(createForm({text}))
    setText('')
    navigate('/')

  }

  return (
    <section className='form'>
      <form action="" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Form</label>
          <input 
            type="text"  
            name='text' 
            id='text' 
            value={text} 
            onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type='submit'>
            Submit Form
          </button>
        </div>
      </form>
    </section>
  )
}

export default FormForm