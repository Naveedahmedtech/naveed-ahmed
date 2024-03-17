import { RouterProvider } from 'react-router-dom';
import './App.css'
import { router } from './router/routes';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CursorTrail from './components/CursorTrail';


function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <CursorTrail />
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
