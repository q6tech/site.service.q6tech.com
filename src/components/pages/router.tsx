import { useMemo } from "react";
import { RouterProvider, ScrollRestoration, createBrowserRouter, useMatches, useOutlet } from "react-router-dom";
import { DefaultLayout } from "../layouts/default/default-layout";
import { LandingPage } from "./landing/landing-page";
import { MeetTheTeamPage } from "./meet-the-team/meet-the-team-page";
import { Helmet } from "react-helmet-async";
import { NotFoundPage } from "./not-found/not-found-page";

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

export function RootLayout() {

    const matches = useMatches();

    const routeContext = useMemo(() => {
        const routesWithContext = matches.filter(x => !!x.handle);
        if (routesWithContext.length > 1) {
            console.warn("Multiple matches with context were detected for the current route. This isn't supported.");
        }
        if (routesWithContext.length == 1) {
            return routesWithContext[0].handle as RouteContextProps;
        }
        return undefined;
    }, [...matches]);

    const title = useMemo(
        () => routeContext?.title ? `${routeContext.title} | Q6 Technologies` : "Q6 Technologies",
        [routeContext?.title]
    );
    const outlet = useOutlet();

    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <ScrollRestoration />
            {outlet}
        </>
    )
}

type RouteContextProps = {
    title?: string;
}
