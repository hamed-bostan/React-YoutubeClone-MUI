import './App.css'
import { UIProvider } from './context/ui'
import { MainContent } from './components/MainContent'
import { HomePage } from './pages/HomePage'
import { ShortsPage } from './pages/ShortsPage'
import { SubscriptionPage } from './pages/SubscriptionPage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from "react-router-dom";
import { Layout } from './Layout'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="shorts" element={<ShortsPage />} />
        <Route path="subscription" element={<SubscriptionPage />} />
      </Route>
    )
  );

  return (
    <>
      <UIProvider>
        <RouterProvider router={router} />
      </UIProvider>
    </>
  )
}

export default App
