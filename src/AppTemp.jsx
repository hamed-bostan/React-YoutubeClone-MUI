import './App.css'
import { UIProvider } from './context/ui'
import { Layout } from './Layout'
import { MainContent } from './components/MainContent'

function App() {

  return (
    <>
      <UIProvider>
        <Layout>
          <MainContent />
        </Layout>
      </UIProvider>
    </>
  )
}

export default App
