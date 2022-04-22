
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ForgotPassword from './page/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './page/auth/ResetPassword/ResetPassword';
import Register from './page/auth/Register/Register';
import Login from './page/auth/Login/Login';
import Buyer from './page/buyer/Buyer/Buyer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Buyer' element={<Buyer/>} />
          <Route path='/Login' element={<Login />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
