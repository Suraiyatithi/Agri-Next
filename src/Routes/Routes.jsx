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
import Dashboard from "../layout/Dashboard";
import Cart from "../Page/Dashboard/Cart";
import AllUsers from "../Page/Dashboard/AllUsers";
import AddItems from "../Page/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Page/Dashboard/ManageItems";
import UpdateItem from "../Page/Dashboard/UpdateItem";
import Payment from "../Page/Dashboard/Payment";
import PaymentHistory from "../Page/Dashboard/PaymentHistory";
import AdminHome from "../Page/Dashboard/AdminHome";
import UserHome from "../Page/Dashboard/UserHome";

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

    //  {
    //   path: 'dashboard',
    //   element: <Dashboard></Dashboard>,
    //   children: [
    //     {
    //       path: 'cart',
    //       element: <Cart></Cart>
    //     }
    //   ]
    // }

  {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
         {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },

        // admin routes
         {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
         {
          path: 'addItems',
          element: <AdminRoute><AddItems></AddItems> </AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }

      ]
    }


]);
