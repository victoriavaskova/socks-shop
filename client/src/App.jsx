import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import SignUpPage from "./pages/signUpPage/signUpPage"
import LoginPage from "./pages/loginPage/loginPage";
import CreateSockPage from "./pages/createSockPage/createSockPage"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
return (
  <Routes>


  <Route path="/" element={<Layout />}>
  <Route path="/" element={<WelcomePage />} />
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/createsocks" element={<CreateSockPage />} />
  </Route>


  <Route path="*" element={<>404</>} />
</Routes>
)
}

export default App
