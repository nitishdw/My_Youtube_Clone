import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
function App() {
  return (
   <Router>
    <Sidebar />
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>} />
      <Route path='/about' element={<h1>About Page</h1>} />
      <Route path='/contact' element={<h1>Contact Page</h1>} />
      <Route path='*' element={<h1>404 Page Not Found</h1>} />  
    </Routes>

   </Router>
  );
}

export default App;
