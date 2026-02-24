import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Category } from './pages/category/Category';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;