import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProtectedLayout, Layout } from '../components/Layout'
import { Landing } from '../components/views/Landing'
import { Home } from '../components/views/Home'
import { Profile } from '../components/views/Profile'
import { NotFound } from '../components/views/NotFound'
import { Onboarding } from '../components/views/Onboarding'
import { FindThatJob } from '../components/views/FindThatJob'
import { CreateNewJob } from '../components/views/CreateNewJob'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>

        <Route element={<ProtectedLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/FindThatJob" element={<FindThatJob />} />
          <Route path="/CreateNewJob" element={<CreateNewJob />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
