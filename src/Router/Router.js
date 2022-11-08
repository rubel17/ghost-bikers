import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GhostBikersDitail from "../Pages/GhostBikersDitail/GhostBikersDitail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import PrivateRoute from "./PrivateRoute";



export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
          
            {
                path:'/GhostBikers/:id',
                element:<GhostBikersDitail></GhostBikersDitail>,
                loader:({params}) =>{
                    return fetch(`https://educare-server3.vercel.app/course/${params.id}`)
                  },
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute></PrivateRoute>,
                loader:({params}) =>{
                    return fetch(`https://educare-server3.vercel.app/course/${params.id}`)
                  },
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }

])
