import axios from 'axios'

const API_URL = '/api/forms/'

// Create new form
const createForm = async (formData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, formData, config)

    return response.data
}

// Get form
const getForms = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete form
const deleteForm = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + id, config)

    return response.data
}

const formService = {
    createForm,
    getForms,
    deleteForm
}

export default formService