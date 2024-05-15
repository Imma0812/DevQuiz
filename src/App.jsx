import React from 'react'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import Footer from './components/Footer'
function App() {


  return (
    <>


      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
            <div class="col-md-8 mx-auto ">
              <div >
                <Header/>
                <Landing/>
                <Footer/>
              </div>
            </div>
            <div class="col-md-2"></div>
        </div>
      </div>

    </>
  )
}

export default App
