import { BrowserRouter, Routes, Route } from "react-router-dom"


import { WindowWidthProvider } from "./context/WindowWidthContext";
import { LoginProvider } from "./context/LoginContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Initial from "./pages/Initial";
import Login from "./pages/Login";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <LoginProvider>
        <WindowWidthProvider>
          <Routes>
            <Route path='/inicio' element={<Initial />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </WindowWidthProvider>
      </LoginProvider>
      <Footer />
    </BrowserRouter>
  )
}
export default AppRoutes;
