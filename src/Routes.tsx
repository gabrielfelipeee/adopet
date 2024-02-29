import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Initial from "./pages/Initial";
import { WindowWidthProvider } from "./context/WindowWidthContext";





function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <WindowWidthProvider>
        <Routes>
          <Route path='/inicio' element={<Initial />} />
        </Routes>
      </WindowWidthProvider>
      <Footer />
    </BrowserRouter>
  )
}
export default AppRoutes;
