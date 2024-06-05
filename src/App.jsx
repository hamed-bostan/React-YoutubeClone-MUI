import './App.css'
import Navbar from './navbar/Navbar'
import { Sidebar } from './sidebar/Sidebar'
import { UIProvider } from './context/ui'

function App() {

  return (
    <>
      <UIProvider>
        <Navbar />
        <Sidebar />
      </UIProvider>
    </>
  )
}

export default App
