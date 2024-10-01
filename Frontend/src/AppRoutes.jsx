import React from 'react'
import Home from './pages/Home'
import Order from './pages/PizzaOrder'
import Layout from './Layout'

const AppRoutes = () => {
  return (
    <Routes>
            <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/order" element={<Order />} />
            </Route>
           
        </Routes>
  )
}

export default AppRoutes