
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/HomePage"
import Register from "./pages/Auth/Register"
import Login from './pages/Auth/Login';

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
                <Route index path="/" element={<HomePage/>} />
                <Route  path="/register" element={<Register/>} />
                <Route  path="/login" element={<Login/>} />



        </Route>


        
    </Routes>
    
      
    </BrowserRouter>
  )
}

export default AppRoutes
