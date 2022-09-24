import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../components/Layout'
import { Landing } from '../components/views/Landing'
import { Home } from '../components/views/Home'
import { Login } from '../components/views/auth/Login'
import { Register } from '../components/views/auth/Register'
import { Profile } from '../components/views/Profile'
import { NotFound } from '../components/views/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
