import { Routes, Route } from "react-router-dom";
import Layout from "./widgets/Layout/Layout";
import MainPage from "./pages/mainPage/mainPage"




function App() {
return (
  <>
    <Routes>
      <Route element={<Layout />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </>
);
}

export default App
