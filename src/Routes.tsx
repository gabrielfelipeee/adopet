import { BrowserRouter, Routes, Route } from "react-router-dom"


import { WindowWidthProvider } from "./context/WindowWidthContext";
import { LoginProvider } from "./context/LoginAndRegisterContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <LoginProvider>
        <WindowWidthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Initial />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cadastro' element={<Register />} />
          </Routes>
        </WindowWidthProvider>
      </LoginProvider>
      <Footer />
    </BrowserRouter>
  )
}
export default AppRoutes;
