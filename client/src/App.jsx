import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout/Layout";
import MainPage from "./pages/mainPage/mainPage";
import SignUpPage from "./pages/signUpPage/signUpPage"
import LoginPage from "./pages/loginPage/loginPage";

function App() {
return (
  <Routes>


  <Route path="/" element={<Layout />}>
  <Route path="/" element={<MainPage />} />
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="/login" element={<LoginPage />} />
  </Route>


  <Route path="*" element={<>404</>} />
</Routes>
)
}

export default App
