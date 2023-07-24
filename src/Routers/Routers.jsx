import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Error from "../Components/Error/Error";
import CollageDetails from "../Components/CollageCardDetails/CollageDetails";
import Details from "../Components/Details/Details";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main ></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/colleges",
          element:<Colleges></Colleges>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/collageDetails",
          element: <CollageDetails></CollageDetails>,
          loader: () => fetch("/college.json")
        },
        {
          path:"/details/:detailsId",
          element: <Details></Details>,
          loader : ({params}) => fetch(`/college.json/${params.detailsId}`)
        }
      ]
    },
  ]);

  export default router;