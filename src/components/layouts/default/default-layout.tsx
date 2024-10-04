import { useOutlet } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./nav";

export function DefaultLayout() {
    const outlet = useOutlet();
    return (
        <div className="overflow-auto h-screen bg-white">
            <Nav />
            {/* New stacking context */}
            <main className="relative z-10 pt-28 min-h-lvh bg-white container mx-auto p-6">
                {outlet}
            </main>
            <Footer />
        </div>
    )
}
