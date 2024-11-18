// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Vans from '../Vans/Vans'
import VanDetail from '../Vans/VanDetail'
import Login from './Login'
import Dashboard from './components/Hosts/Dashboard'
import Income from './components/Hosts/Income'
import Reviews from './components/Hosts/Reviews'
import NotFound from './NotFound'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'
import AuthRequired from './components/AuthRequired'
// import HostVans from './components/Hosts/HostVans'
// import HostVanDetail from './components/Hosts/HostVansDetails'
// import HostVanInfo from './components/Hosts/HostVanInfo'
// import HostVanPricing from './components/Hosts/HostVanPricing'
// import HostVanPhotos from './components/Hosts/HostVanPhotos'





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
              <Route  />
              <Route path="vans/:id" >
                <Route index  />
                <Route path="pricing" />
                <Route path="photos" />
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
