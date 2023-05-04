import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signup from "./components/UserRegistration/Signup";
import UserForm from "./components/UserForm/UserForm";
import { Routes, Route } from "react-router";
import { useLocation } from "react-router";
import Login from "./components/UserRegistration/Login";
import MobilityChecker from "./components/MobilityChecker/MobilityChecker";
import ExerciseDetails from "./components/ExerciseDetails/ExerciseDetails";
import Videotutorial from "./components/VideoTutorial/Videotutorial";
function App(props) {
  const location=useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* if i pass props in signup component for path and make a handlechange ducntion which */}
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userform" element={<UserForm/>}/>
        <Route path="/mobility" element={<MobilityChecker/>}></Route>
        <Route path='/exerciseDetails' element={<ExerciseDetails/>}/>
        <Route path='/videoTutorials' element={<Videotutorial/>}/>
      </Routes>
      {location.pathname!=='/signup' && location.pathname!=='/login'?<Footer/>:<></>}
      
      
    </>
  );
}

export default App;
