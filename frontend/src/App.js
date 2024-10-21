import {Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/home/Home'
import Profile from './components/pages/profile/Profile'
import Login from './components/pages/login/Login'
import Register from './components/pages/register/Register'
import Layout from './components/common/Layout'
import Updates from './components/pages/updates/Updates';
import Portfolio from './components/pages/portfolio/Portfolio';
import Portfolio1 from './components/pages/portfolio/Portfolio1';
import Portfolio2 from './components/pages/portfolio/Portfolio2';
import Portfolio3 from './components/pages/portfolio/Portfolio3';



function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/updates' element={<Updates/>}/>
          

        </Route>
        <Route path='/pf' element={<Portfolio/>}/>
        <Route path='/pf1' element={<Portfolio1/>}/>
        <Route path='/pf2' element={<Portfolio2/>}/>
        <Route path='/pf3' element={<Portfolio3/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
