import { useEffect, useRef } from "react";
import { NavigationType, ScrollRestoration, useLocation, useNavigationType, useOutlet } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./nav";

export function DefaultLayout() {

    const scrollContainer = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const type = useNavigationType();
    useEffect(() => {
        if (type == NavigationType.Push) {
            scrollContainer.current?.scrollTo(0, 0);
        }
    }, [pathname, type]);

    const outlet = useOutlet();
    return (
        <div className="overflow-auto h-screen bg-white" ref={scrollContainer}>
            <Nav />
            {/* New stacking context */}
            <main className="relative z-10 pt-28 min-h-lvh bg-white container mx-auto p-6">
                {outlet}
            </main>
            <Footer />
            <ScrollRestoration />
        </div>
    )
}
