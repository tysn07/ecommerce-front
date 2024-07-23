import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUpPage from "./Login/SignUpPage";
import ShoppingCart from "./Shopping Cart";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginPage from "./Login/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: App(),
    },
    {
        path: "/login",
        element: LoginPage(),
    },
    {
        path:"/signup",
        element: SignUpPage(),
    },
    {
        path:"/cart",
        element: ShoppingCart(),
    },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
