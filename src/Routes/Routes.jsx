import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Main_layout from "../layout/Main_layout";
import ProductLayout from "../layout/ProductLayout";
import FeatureLayout from "../layout/FeatureLayout";
import Login from "../Login/login";
import SignUp from "../Signup/signup";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Page/secret";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
    {
        path:'/',
        element:<Main_layout></Main_layout>
    },
    {
      path:"/products",
      element:<ProductLayout></ProductLayout>
    },
    {
      path:"/feature",
      element:<FeatureLayout></FeatureLayout>
    },
     {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ]
  },
]);
