import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routers } from './Router/Router';


function App() {
  return (
    <div className='w-75 mx-auto'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
