import { useOutlet } from "react-router-dom";
import { Footer } from "./footer";
import { Nav } from "./nav";

export function DefaultLayout() {
    const outlet = useOutlet();
    return (
        <div className="overflow-auto h-screen bg-white">
            <Nav />
            {/* New stacking context */}
            <main className="relative z-10 pt-24 min-h-screen bg-white">
                {outlet}
            </main>
            <Footer />
        </div>
    )
}
