import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import { RouterProvider, useCurrentPath } from "./context/RouterContext";

function App() {
    return (
        <RouterProvider>
            <Router />
        </RouterProvider>
    );
}

function Router() {
    const currentPath = useCurrentPath();

    if (currentPath === "/products") {
        return <Products />;
    } else if (currentPath === "/contact") {
        return <Contact />;
    } else if (currentPath === "/" || currentPath === "/home") {
        return <Home />;
    } else {
        return <h1>Not Found</h1>;
    }
}

export default App;
