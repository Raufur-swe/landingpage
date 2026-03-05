import React, { useState } from 'react'
import Navber from './components/Navber'
import Home from './components/Home'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import Ourwork from './components/Ourwork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const [theme , setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  return (
    <div className=' dark:bg-black relative' >
      <Toaster/>
      <Navber theme={theme} setTheme={setTheme} />
      <Home/>
      <Trustedby/>
      <Services/>
      <Ourwork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App