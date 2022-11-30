import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateForm } from '../features/forms/formSlice'

function EditForm() {
    
  const state = useLocation()
  const formID = state.state.form._id
  const formTitle = state.state.form.text

  const [text, setText] = useState(formTitle)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(updateForm({text, formID}))
    
    setText('')
    navigate('/')
  }



  return (
    <>
      <section className="heading">
          <h1>Edit Form</h1>
      </section>
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
  </>
  )
}

export default EditForm