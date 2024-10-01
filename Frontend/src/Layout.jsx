import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';


const Layout = () => {
  return (
    <>
    <Header />
    <main>
        <Home/>
    </main>
    <Footer />
</>
  )
}

export default Layout