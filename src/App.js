import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/forgot/password"} element={<ForgotPassword />} />
        <Route path={"/"} element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
