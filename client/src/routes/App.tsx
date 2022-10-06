import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Landing } from "../components/views/Landing";
import { Home } from "../components/views/Home";
import { NewProfile, Profile } from "../components/views/Profile";
import { NotFound } from "../components/views/NotFound";
import { FindThatJob } from "../components/views/FindThatJob";

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
        <Route
          path="/profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />
        <Route
          path="/profile/new"
          element={
            <Layout>
              <NewProfile />
            </Layout>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/FindThatJob" element={<FindThatJob />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
