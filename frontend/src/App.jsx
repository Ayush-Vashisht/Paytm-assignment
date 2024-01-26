import { Route, Routes } from "react-router-dom";
import axios from 'axios';
import SignUpPage from "./pages/SignUpPAge";
import SignInPage from "./pages/SignInPage";

axios.defaults.baseURL="http://localhost:3000/";
axios.defaults.withCredentials=true;
function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
