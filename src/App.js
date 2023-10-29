import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Page/Home/Home';
import SignIn from './components/Page/SignIn/SignIn';
import SignUp from './components/Page/SignUp/SignUp';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
