import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import * as signalR from "@microsoft/signalr";
import { setOrderbook, setPrice } from "./redux/signalRSlice";
import { useDispatch } from "react-redux";
import Layout from "./components/Layout/Layout";
import SignInResult from "./components/SignInResult/SignInResult";
import config from "./config";

const AppRouter = function () {
  let dispatch = useDispatch();

  useEffect(() => {
    let connection = new signalR.HubConnectionBuilder()
      .withUrl(
        `${config.OT_URL}Hubs/Default?tokenp=${localStorage.getItem(
          "currentToken"
        )}`
      )
      .build();

    connection.on("ReceivePriceUpdate", (data) => {
      dispatch(setPrice(data));
      dispatch(setOrderbook(data))
    });

    connection.start();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin-result" element={<SignInResult />} />
        <Route path="/report" element={<SignInResult />} />
        <Route path="/topup" element={<SignInResult />} />
        <Route path="/management" element={<SignInResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
