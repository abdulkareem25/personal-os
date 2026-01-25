import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Mail from './components/windows/mail/Mail'
import Github from './components/windows/github/Github'
import Notes from './components/windows/notes/notes'
import PdfViewer from './components/windows/pdf/Pdf'

const App = () => {
  return (
    <main>
      <Navbar />

      <Github />
      <Notes />
      <Mail />
      <PdfViewer />

      <Footer />
    </main>
  )
}

export default App
