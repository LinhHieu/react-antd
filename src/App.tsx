import './App.css';
import LoginMain from './component/LoginBackground/LoginMain';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ForgotPassword from './page/ForgotPassword/ForgotPassword';
import ResetPassword from './page/ResetPassword/ResetPassword';
import Register from './page/Register/Register';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginMain />} />
          <Route path='/ForgotPassword' element={<ForgotPassword />} />
          <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
