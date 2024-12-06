import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop/";
import About from "../component/About";
import Blog from "../component/Blog";
import SingleBook from "../component/SingleBook";
import ErrorPage from "../Error-page";
import DashboardLayout from "../Dashboard/DashboardLayout";
import Singlebook from "../Shop/Singlebook";
import Dashboard from "../Dashboard/Dashboard";
import Uploadbook from "../Dashboard/Uploadbook";
import Managebook from "../Dashboard/Managebook";
import Editbook from '../Dashboard/Editbook'
import Signup from "../component/Signup";
import Login from "../component/Login";
import Logout from "../component/Logout"
import PrivateRoute from "../protecteRoute/PrivateRoute";



const router = createBrowserRouter([ 
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            // Add more routes here for other pages...
            {
                path: "/shop",
                element: <Shop/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/blog",
                element: <Blog/>,
            },
            {
                path: "/singleBook",
                element: <SingleBook/>,
            },
            {
                path:"/book/:id",
                element: <Singlebook/>,
                loader:({params})=>fetch(`http://localhost:5001/grabs/${params.id}`)
            }
        ]
    },
    {
        path: '/admin/dashboard',
        element: <DashboardLayout/>,
        children:[
            {
                path:'/admin/dashboard',
                element:<Dashboard/>
            },
            {
                path:'/admin/dashboard/upload',
                element:<Uploadbook/>
            },
            {
                path:'/admin/dashboard/manage',
                element:<Managebook/>
            },
            {
                path:'/admin/dashboard/edit/:id',
                element:<Editbook/>,
                loader:({params})=>fetch(`http://localhost:5001/grabs/${params.id}`)
            },
        ]
    },
    {
        path: '/signup',
        element: <Signup/>,
    },
    {
        path: '/Login',
        element: <Login/>,
    }
    ,
    {
        path: '/Logout',
        element: <Logout/>
    }
]);

export default router;