import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReview from "../Pages/AddReview/AddReview";
import AddService from "../Pages/AddService/AddService";
import AllReviews from "../Pages/AllReviews/AllReviews";
import Blog from "../Pages/Blog/Blog";
import EditReview from "../Pages/EditReview/EditReview";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import GhostBikersDitail from "../Pages/GhostBikersDitail/GhostBikersDitail";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReview from "../Pages/MyReview/MyReview";
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
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/servicesall',
                element:<ServicesAll></ServicesAll>,
                loader:() => fetch('https://ghost-bikers-server.vercel.app/GhostBikers')
            },
            {
                path:'/GhostBikers/:id',
                element:<GhostBikersDitail></GhostBikersDitail>,
                loader:({params}) =>{
                    return fetch(`https://ghost-bikers-server.vercel.app/GhostBikers/${params.id}`)
                  },
            },
            {
                path:'/AddServices/:id',
                loader:({params}) =>{
                    return fetch(`https://ghost-bikers-server.vercel.app/GhostBikers/${params.id}`)
                  },
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/AddReview/:id',
                loader:({params}) =>{
                    return fetch(`https://ghost-bikers-server.vercel.app/GhostBikers/${params.id}`)
                  },
                element:<PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path:'/myReview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/allReviews',
                element:<PrivateRoute><AllReviews></AllReviews></PrivateRoute>,
                loader:() => fetch('https://ghost-bikers-server.vercel.app/reviewDatas'),
            },
            {
                path:'/editReview/:id',
                element:<PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader:({params}) =>{
                    return fetch(`https://ghost-bikers-server.vercel.app/reviewData/${params.id}`)
                  },
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
