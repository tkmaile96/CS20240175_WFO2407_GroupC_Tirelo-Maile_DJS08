// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans/Vans'
import VanDetail from './Pages/Vans/VanDetail'
import Login from './Pages/Login'
import Dashboard from './Pages/Hosts/Dashboard'
import Income from './Pages/Hosts/Income'
import Reviews from './Pages/Hosts/Reviews'
import HostVans from './Pages/Hosts/HostVans'
import HostVanDetail from './Pages/Hosts/HostVansDetails'
import HostVanInfo from './Pages/Hosts/HostVanInfo'
import HostVanPricing from './Pages/Hosts/HostVanPricing'
import HostVanPhotos from './Pages/Hosts/HostVanPhotos'
import NotFound from './Pages/NotFound'
import Layout from './Components/Layout'
import HostLayout from './Components/HostLayout'
import AuthRequired from './Components/AuthRequired'

import "./server"


function App() {

  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route
            path="login"
            element={<Login />}
          />

          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
    </Routes>
   </BrowserRouter>
  )
}
ReactDOM
.createRoot(document.getElementById('root'))
.render(<App />);

export default App
