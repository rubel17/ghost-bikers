import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
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
                path:'/GhostBikers/:id',
                element:<GhostBikersDitail></GhostBikersDitail>,
                loader:({params}) =>{
                    return fetch(`http://localhost:4000/GhostBikers/${params.id}`)
                  },
            },
            {
                path:'/addService/:id',
                loader:({params}) =>{
                    return fetch(`http://localhost:4000/GhostBikers/${params.id}`)
                  },
                element:<PrivateRoute><AddService></AddService></PrivateRoute>
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
                path:'/myReview',
                element:<PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path:'/allReviews',
                element:<PrivateRoute><AllReviews></AllReviews></PrivateRoute>,
                loader:() => fetch('http://localhost:4000/reviewData'),
            },
            {
                path:'/editReview/:id',
                element:<PrivateRoute><EditReview></EditReview></PrivateRoute>,
                loader:({params}) =>{
                    return fetch(`http://localhost:4000/reviewData/${params.id}`)
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
