import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';
import Collections from './comp/Collections';
import Navbar from './comp/Navbar';
import Aboutus from './comp/Aboutus';
import Bundle from './comp/Bundle';
import Contact from './comp/Contact';
import Filter from './comp/Filter';
import Projects2 from './comp/Products2';
import Signup from './comp/Signup';
import Account from './comp/Account';
import Login from './comp/Login';
import FandQ from './comp/FandQ';

import { Contextapi } from './comp/Contextapi';
import Productpage from './comp/Productpage';
import Forgotpass from './comp/Forgotpass';
import Cart from './comp/Cart';
import Dashboard from './comp/Dashboard';
import Left from './comp/Left';
import { useState } from 'react';
import AdminproductForm from './comp/AdminproductForm'
import Adminproduct from './comp/Adminproduct';



function App() {
  const [loginname, setLoginname] = useState(localStorage.getItem('loginname'))

  return (

    <>


      <Router>
        <Contextapi.Provider value={{ loginname, setLoginname }}>
          <Navbar />
          <Routes>
            <Route path='/header' element={<Header />} ></Route>
            <Route path='/' element={<Divider />} ></Route>
            <Route path='/cart' element={<Cart />} ></Route>
            <Route path='/collections' element={<Collections />} ></Route>
            <Route path='/about' element={<Aboutus />} ></Route>
            <Route path='/bundle' element={<Bundle />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/products' element={<Projects2 />} ></Route>
            <Route path='/filter' element={<Filter />} ></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/account' element={<Account />}> </Route>
            <Route path='/prpage' element={<Productpage />}> </Route>
            <Route path='/forgotpass' element={<Forgotpass />}> </Route>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/left' element={<Left />} ></Route>
            <Route path='/addproduct' element={<AdminproductForm />} ></Route>
            <Route path='/adminproducttable' element={<Adminproduct />} ></Route>
          </Routes>
          <FandQ />
          <Footer />
        </Contextapi.Provider>
      </Router>


    </>
  );
}

export default App;
