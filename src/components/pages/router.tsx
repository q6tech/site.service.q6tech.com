import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./landing/landing-page";

function createRouter() {
    return createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />,
        },
    ])
}

export function Router() {
    const router = useMemo(createRouter, [createRouter]);
    return (
        <RouterProvider router={router} />
    )
}
