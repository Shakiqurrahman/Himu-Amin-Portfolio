import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "../pages/HomePage";
import BlogsPage from "../pages/BlogsPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import GalleryPage from "../pages/GalleryPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";

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
                path: "/blogs/:id",
                element: <BlogDetailsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/gallery",
                element: <GalleryPage />,
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