import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/default-layout";
import { LandingPage } from "./landing/landing-page";

function createRouter() {
    return createBrowserRouter([
        {
            element: <DefaultLayout />,
            children: [
                {
                    path: "/",
                    element: <LandingPage />,
                },
            ]
        }
    ])
}

export function Router() {
    const router = useMemo(createRouter, [createRouter]);
    return (
        <RouterProvider router={router} />
    )
}
