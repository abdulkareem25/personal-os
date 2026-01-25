import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Mail from './components/windows/mail/Mail'
import Github from './components/windows/github/Github'
import Notes from './components/windows/notes/notes'

const App = () => {
  return (
    <main>
      <Navbar />

      <Github />
      <Notes />
      <Mail />

      <Footer />
    </main>
  )
}

export default App
