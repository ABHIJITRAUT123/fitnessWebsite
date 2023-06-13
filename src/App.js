import styled from 'styled-components';
import './App.css';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import OurServices from './Component/OurServices';
import ContactUs from './Component/ContactUs';

var Main = styled.section`
`
var PageNotFound = styled.h1`
color: white;`

function App() {
  return (
    <Main>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/our-services' element={<OurServices />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound className='text-center mt-5 mb-5'>Page Not Found</PageNotFound>} />
      </Routes>
      <Footer />
    </Main>
  );
}

export default App;
