import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Youtube from './components/windows/youtube/Youtube'
import Mail from './components/windows/mail/Mail'
import Github from './components/windows/github/Github'
import Notes from './components/windows/notes/notes'
import PdfViewer from './components/windows/pdf/Pdf'
import Cli from './components/windows/cli/Cli'
import { StateContext } from './context/StateProvider'
import { useContext } from 'react'

const App = () => {

  const [initialState] = useContext(StateContext);

  return (
    <main>
      <Navbar />

      {initialState.youtube && <Youtube /> }
      {initialState.github && <Github /> }
      {initialState.notes && <Notes />}
      {initialState.mail && <Mail />}
      {initialState.pdf && <PdfViewer />}
      {initialState.cli && <Cli />}

      <Footer />
    </main>
  )
}

export default App
