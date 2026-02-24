import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Category } from './pages/category/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/categoria/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;