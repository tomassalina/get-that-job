import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { HomeLayout, Layout } from '../components/Layout'
import { Landing } from '../components/views/Landing'
import { Home } from '../components/views/Home'
import { Profile } from '../components/views/Profile'
import { NotFound } from '../components/views/NotFound'
import { Onboarding } from '../components/views/Onboarding'
import { FindThatJob } from '../components/views/FindThatJob'
import { CreateNewJob } from '../components/views/CreateNewJob'
import { ProtectedLayout } from '../components/Layout/ProtectedLayout'
import { useUser } from '../hooks/useUser'

function App() {
  const { user } = useUser()

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
        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home user={user} />} />
        </Route>
        <Route
          path="/profile"
          element={
            <HomeLayout>
              <Profile />
            </HomeLayout>
          }
        />
        <Route
          path="/onboarding"
          element={
            <Layout>
              <Onboarding />
            </Layout>
          }
        />

        <Route
          path="/FindThatJob"
          element={
            <HomeLayout>
              <FindThatJob />
            </HomeLayout>
          }
        />
        <Route
          path="/CreateNewJob"
          element={
            <HomeLayout>
              <CreateNewJob />
            </HomeLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
