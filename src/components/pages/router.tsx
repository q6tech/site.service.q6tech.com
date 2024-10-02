import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/default-layout";
import { LandingPage } from "./landing/landing-page";
import { MeetTheTeamPage } from "./meet-the-team/meet-the-team-page";
import { NotFoundPage } from "./not-found/not-found-page";
import { RootLayout } from "../layouts/root/root-layout";

function createRouter() {
    return createBrowserRouter([
        {
            element: <RootLayout />,
            children: [
                {
                    element: <DefaultLayout />,
                    children: [
                        {
                            path: "/",
                            element: <LandingPage />,
                            index: true,
                            handle: {
                                title: "Home"
                            } satisfies RouteContextProps
                        },
                        {
                            path: "/meet-the-team",
                            element: <MeetTheTeamPage />,
                            handle: {
                                title: "Meet the Team"
                            } satisfies RouteContextProps
                        },
                        {
                            path: "*",
                            element: <NotFoundPage />,
                            handle: {
                                title: "Not Found"
                            } satisfies RouteContextProps
                        },
                    ]
                }
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

export type RouteContextProps = {
    title?: string;
}
