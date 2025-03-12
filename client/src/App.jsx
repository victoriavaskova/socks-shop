import { useState } from 'react'
import { Routes, Route } from "react-router";
import Layout from "./widgets/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/loginPage/loginPage";
import CreateSockPage from "./pages/createSockPage/createSockPage"

function App() {
const [user, setUser] = useState({ status: "logging", data: null });
return (
  <>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/createsock" element={<CreateSockPage />} />
        // <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
        <Route path="/login" element={<LoginPage setUser={setUser}/>} />
        <Route path="*" element={<h1>No content</h1>} />
      </Route>
    </Routes>
  </>
);
}
export default App
