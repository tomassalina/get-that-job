import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProtectedLayout, Layout } from '../components/Layout'
import { Landing } from '../components/views/Landing'
import { Home } from '../components/views/Home'
import { Applications } from '../components/views/Applications'
import { Following } from '../components/views/Following/Following'
import { Profile } from '../components/views/Profile'
import { Jobs } from '../components/views/Jobs'
import { NotFound } from '../components/views/NotFound'
import { Onboarding } from '../components/views/Onboarding'
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
          <Route path="/applications" element={<Applications />} />
          <Route path="/following" element={<Following />} />
          <Route path="/jobs/:jobID" element={<Jobs />} />
          <Route path="/jobs/new" element={<CreateNewJob />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
