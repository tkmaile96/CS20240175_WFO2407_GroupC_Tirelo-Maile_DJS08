// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Vans from './Vans/Vans'
import VanDetail from './Vans/VanDetail'
import Login from './Login'
import Dashboard from './components/Hosts/Dashboard'
import Income from './components/Hosts/Income'
import Reviews from './components/Hosts/Reviews'
import HostVans from './components/Hosts/HostVans'
import HostVanDetail from './components/Hosts/HostVansDetails'
import HostVanInfo from './components/Hosts/HostVanInfo'
import HostVanPricing from './components/Hosts/HostVanPricing'
import HostVanPhotos from './components/Hosts/HostVanPhotos'
import NotFound from './NotFound'
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
