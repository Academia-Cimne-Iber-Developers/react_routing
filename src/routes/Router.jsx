import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Products from "../components/products/Products";
import Layout from "./Layout";
import ProductCard from "../components/products/ProductCard";
import ProductForm from "../components/products/ProductForm";
import ProductDetail from "../components/products/ProductDetail";

const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                children: [
                    {
                        index: true,
                        element: <Products />,
                    },
                    {
                        path: ":id",
                        element: <ProductDetail />,
                    },
                    {
                        path: "new",
                        element: <ProductForm />,
                    },
                    {
                        path: "edit/:id",
                        element: <ProductForm />,
                    },
                ],
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <h1>Not Found</h1>,
            },
        ],
    },
]);

export default Router;
