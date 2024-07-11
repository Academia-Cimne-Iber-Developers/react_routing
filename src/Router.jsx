import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Products from "./components/Products";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Products />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "*",
        element: <h1>Not Found</h1>,
    },
]);

export default Router;
