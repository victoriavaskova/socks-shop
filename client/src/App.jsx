import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import SignUpPage from "./pages/signUpPage/signUpPage"
import LoginPage from "./pages/loginPage/loginPage";
import CreateSockPage from "./pages/createSockPage/createSockPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance, { setAccessToken } from "./api/axiosInstance";

function App() {
  const [user, setUser] = useState({ status: "logging", data: null });
  const logoutHandler = () => {
    axios
      .get("/api/auth/logout")
      .then(() => setUser({ status: "guest", data: null }));
  };

  useEffect(() => {
    axiosInstance("/tokens/refresh")
      .then(({ data }) => {
        setTimeout(() => {
          setUser({ status: "logged", data: data.user });
        }, 1000);
        setAccessToken(data.accessToken);
      })
      .catch(() => {
        setUser({ status: "guest", data: null });
        setAccessToken("");
      });
  }, []);
return (
  <Routes>


  <Route path="/" element={<Layout logoutHandler={logoutHandler} user={user}/>}>
  <Route path="/" element={<WelcomePage />} />
  <Route path="/signup" element={<SignUpPage setUser={setUser}/>} />
  <Route path="/login" element={<LoginPage setUser={setUser}/>} />
  <Route path="/createsocks" element={<CreateSockPage/>} />

  </Route>


  <Route path="*" element={<>404</>} />
</Routes>
)
}

export default App
