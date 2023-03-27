import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import SignInResult from "./components/SignInResult/SignInResult";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/signin-result" element={<SignInResult />} />
          <Route path="/report" element={<SignInResult />} />
          <Route path="/topup" element={<SignInResult />} />
          <Route path="/management" element={<SignInResult />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
