import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import LandingPage from "./pages/landing.jsx" ;
import Authentication from "./pages/authentication.jsx";


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "/auth" element = {<Authentication/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
