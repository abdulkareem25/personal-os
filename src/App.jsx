import './app.scss'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import MacWindow from './components/windows/macwindow/MacWindow'

const App = () => {
  return (
    <main>
      <Navbar />

      <MacWindow />

      <Footer />
    </main>
  )
}

export default App
