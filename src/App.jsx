import './App.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MainIntro, About, Resume, Services, Skills, Works, Hire, Info, HeaderFixed, Conectus } from './scetion/index'

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="app">
        <HeaderFixed/>
        <MainIntro />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Works />
        <Hire />
        <Info />
        <Conectus />
      </div>
    </>
  )
}

export default App
