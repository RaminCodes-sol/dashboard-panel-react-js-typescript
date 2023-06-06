import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MyContextProvider from './myContext/myContext'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </Router>
)
