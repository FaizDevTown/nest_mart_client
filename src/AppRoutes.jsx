
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Layout from "./components/Layout/Layout"
import HomePage from "./pages/HomePage"
import Register from "./pages/Auth/Register"
import Login from './pages/Auth/Login';
import ForgotPassword from "./pages/Auth/ForgotPAssword";


const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
                <Route index path="/" element={<HomePage/>} />
                <Route  path="/register" element={<Register/>} />
                <Route  path="/login" element={<Login/>} />
                <Route  path="/forgot" element={<ForgotPassword/>} />



        </Route>


        
    </Routes>
    
      
    </BrowserRouter>
  )
}

export default AppRoutes
