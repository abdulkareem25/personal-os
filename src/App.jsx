import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Github from './components/windows/github/Github'

const App = () => {
  return (
    <main>
      <Navbar />
      
      <Github />

      <Footer />
    </main>
  )
}

export default App
