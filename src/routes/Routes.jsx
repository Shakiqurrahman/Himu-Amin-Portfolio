import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            
            // {
            //     path: "/about",
            //     element: <AboutPage />,
            // },
            
            {
                path: "/contact",
                element: <ContactPage />,
            },
            
        ],
    },
    {
        path : '*',
        element : <ErrorPage />
    }
]);
export default router;