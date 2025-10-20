import { createBrowserRouter } from "react-router";
import Errorpage from "../components/Errorpage";
import Root from "./Root";
import Home from "../Pages/Home resoucers/Home";
import Instalation from "../Pages/Instalation";
import Apps from "../Pages/All Apps/Apps";

export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<Errorpage></Errorpage>,
        element:<Root></Root>,
        children: [
            {
                path:'/',
                index: true,
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<Apps></Apps>
            },
            {
                path:"/installation",
                element:<Instalation></Instalation>
            }
        ]
    }
])