import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Mail from './components/windows/mail/Mail'
import Github from './components/windows/github/Github'

const App = () => {
  return (
    <main>
      <Navbar />

      <Github />
      <Mail />

      <Footer />
    </main>
  )
}

export default App
