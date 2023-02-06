import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import PassManager from "./pages/PassManager/PassManager";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.passmanager);
  // console.log("111", user.currentUser);
  return (
    <BrowserRouter>
      {user.currentUser.hasOwnProperty("mobile") ? (
        <Routes>
          <Route path="/" element={<PassManager />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
