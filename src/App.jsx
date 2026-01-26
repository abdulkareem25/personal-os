import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sheryians from './components/windows/sheryians/Sheryians'
import Youtube from './components/windows/youtube/Youtube'
import Mail from './components/windows/mail/Mail'
import Github from './components/windows/github/Github'
import Discord from './components/windows/discord/Discord'
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

      {initialState.sheryians && <Sheryians /> }
      {initialState.youtube && <Youtube /> }
      {initialState.github && <Github /> }
      {initialState.discord && <Discord />}
      {initialState.notes && <Notes />}
      {initialState.mail && <Mail />}
      {initialState.pdf && <PdfViewer />}
      {initialState.cli && <Cli />}

      <Footer />
    </main>
  )
}

export default App
