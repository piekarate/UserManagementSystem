import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateForm from './pages/CreateForm';
import EditForm from './pages/EditForm';
import UserInfo from './pages/UserInfo';



function App() {
  return (
  <>
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/createForm' element={<CreateForm/>}/>
          <Route path='/editForm' element={<EditForm/>}/>
          <Route path='/userInfo' element={<UserInfo/>}/>
        </Routes>
      </div>
    </Router>
    <ToastContainer />
  </>
  );
}

export default App;
