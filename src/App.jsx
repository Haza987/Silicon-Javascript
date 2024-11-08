import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Contact from "./views/Contact"
import Header from './components/Header'
import Footer from './components/Footer' 
import Features from "./views/Features"
import DarkModeProvider from "./components/main-components/utilities/Header/DarkModeContext"

const App = () => {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/features" element={<Features/>}/>
            </Routes> 
          </main>
        <Footer />
      </BrowserRouter>
   </DarkModeProvider>
  )
}

export default App