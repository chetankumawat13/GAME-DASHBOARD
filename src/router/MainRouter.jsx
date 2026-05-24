import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import  { categoryLoader, gameDetailsLoader, gameLoader } from "../services/gameLoader";
import Details from "../pages/Details";
import Save from "../pages/Save";

export const MainRouter = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element: <Home />,
                loader:gameLoader,
                hydrateFallbackElement:<p>Loading....</p>
                
            },
            {
                path:"/details/:id",
                element:<Details />,
                loader:gameDetailsLoader,
                hydrateFallbackElement:<p>Loading....</p>

            },
            {
                path:"/category/:genre",
                element:<Home />,
                loader:categoryLoader,
                hydrateFallbackElement:<p>Loading....</p>

            },
            {
                path:"/save",
                element:<Save />
            }
        ]
    }
])