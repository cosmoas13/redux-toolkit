import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddProduct from './components.js/AddProduct';
import ShowProduct from './components.js/ShowProduct';
import EditProduct from './components.js/EditProduct';

function App() {
  return (
    <BrowserRouter>
      <div className='container mt-3'>
        <Routes>
          <Route
            path='/'
            element={<ShowProduct />}
          />
          <Route
            path='add'
            element={<AddProduct />}
          />
          <Route
            path='edit/:id'
            element={<EditProduct />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
