import axios from 'axios'

const API_URL = '/api/admins/'

// Register admin
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}

// Login admin
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))

    }

    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('userResources')
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService