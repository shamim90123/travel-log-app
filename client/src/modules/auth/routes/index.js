import { Routes, Route } from "react-router-dom"
import Login from "../pages/login"
import SignUp from "../pages/signUp"

function AuthRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth/login" element={ <Login/> } />
        <Route path="/auth/signup" element={ <SignUp/> } />
      </Routes>
    </div>
  )
}

export default AuthRoutes