import React from 'react'
import Landing from '../../components/Landing/Landing'
import About from '../../components/About/About'
import Catalogue from '../../components/Catalogue/Catalogue'
import '../../Assets/reset.css'
const Home = () => {
  return (
    <div>
        <main>
            <Landing/>
            <About/>
            <Catalogue/>
        </main>
    </div>
  )
}

export default Home
