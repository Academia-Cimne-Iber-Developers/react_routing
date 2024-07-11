import { createContext, useContext, useState, useEffect } from "react";

const RouterContext = createContext();

function RouterProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    return (
        <RouterContext.Provider value={currentPath}>
            {children}
        </RouterContext.Provider>
    );
}

function useCurrentPath() {
    return useContext(RouterContext);
}

export { RouterContext, RouterProvider, useCurrentPath };
