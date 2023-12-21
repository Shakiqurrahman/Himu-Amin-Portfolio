import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/blogs",
                element: <BlogsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            
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