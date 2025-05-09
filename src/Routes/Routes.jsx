import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Main_layout from "../layout/Main_layout";
import ProductLayout from "../layout/ProductLayout";

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
    }
    ]
  },
]);
