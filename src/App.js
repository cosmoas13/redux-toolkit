import AddProduct from './components.js/AddProduct';
import ShowProduct from './components.js/ShowProduct';

function App() {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col'>
          <AddProduct />
        </div>
        <div className='col'>
          <ShowProduct />
        </div>
      </div>
    </div>
  );
}

export default App;
