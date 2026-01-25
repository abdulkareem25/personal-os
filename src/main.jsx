import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StateProvider from './context/StateProvider.jsx'

createRoot(document.getElementById('root')).render(
    <StateProvider>
        <App />
    </StateProvider>
)
