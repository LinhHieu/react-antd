
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ForgotPassword from './page/auth/ForgotPassword/ForgotPassword';
import ResetPassword from './page/auth/ResetPassword/ResetPassword';
import Register from './page/auth/Register/Register';
import Login from './page/auth/Login/Login';
import BuyerManagement from './page/buyer/BuyerManagement/BuyerManagement';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Buyer' element={<BuyerManagement />} />
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
