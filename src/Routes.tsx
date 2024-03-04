import { BrowserRouter, Routes, Route } from "react-router-dom"


import { WindowWidthProvider } from "./context/WindowWidthContext";
import { LoginProvider } from "./context/LoginContext";
import { RegisterProvider } from "./context/RegisterContext";
import { HeaderProvider } from "./context/HeaderContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Initial from "./pages/Initial";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Message from "./pages/Message";
import Profile from "./pages/Profile";

function AppRoutes() {
  return (
    <BrowserRouter>

      <HeaderProvider>
        <Header />
      </HeaderProvider>

      <RegisterProvider>
        <LoginProvider>
          <WindowWidthProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/inicio' element={<Initial />} />
              <Route path='/login' element={<Login />} />
              <Route path='/cadastro' element={<Register />} />
              <Route path='/mensagem' element={<Message />} />
              <Route path='/perfil' element={<Profile />} />
            </Routes>
          </WindowWidthProvider>
        </LoginProvider>
      </RegisterProvider>

      <Footer />

    </BrowserRouter>
  )
}
export default AppRoutes;
