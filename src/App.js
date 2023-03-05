import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignInResult from "./components/SignInResult/SignInResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/signin-result" element={<SignInResult />} />
        <Route path="/report" element={<SignInResult />} />
        <Route path="/topup" element={<SignInResult />} />
        <Route path="/management" element={<SignInResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
