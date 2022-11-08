import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GhostBikersDitail from "../Pages/GhostBikersDitail/GhostBikersDitail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicesAll from "../Pages/ServicesAll/ServicesAll";

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
                    return fetch(`http://localhost:4000/GhostBikers/${params.id}`)
                  },
            },
            {
                path:'/GhostBikers/:id',
                element:<PrivateRoute></PrivateRoute>,
                loader:({params}) =>{
                    return fetch(`http://localhost:4000/GhostBikers/${params.id}`)
                  },
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/servicesall',
                element:<ServicesAll></ServicesAll>,
                loader:() => fetch('http://localhost:4000/GhostBikers')
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
