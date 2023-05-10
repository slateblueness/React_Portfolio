import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Main/Home";
import Navbar from "./components/navbar";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import Grade1 from "./pages/PageGrade1/Grade1";
import School from "./pages/PageSchool/School";
import National from "./pages/PageNational/National";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/for-grade1" element={<Grade1 />} />
        <Route path="/for-school-test" element={<School />} />
        <Route path="/for-national-test" element={<National />} />
      </Route>
    </Routes>
  );
}

export default App;
