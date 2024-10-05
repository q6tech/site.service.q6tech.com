import { useMemo } from "react";
import { Link } from "react-router-dom";

export function Footer() {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer className="h-64 text-gray-300 bg-gray-950">
            <div className="w-full h-6 bg-white rounded-b-xl relative z-20">
                <div className="block md:hidden mx-auto h-2 w-[100px] rounded-full bg-muted"></div>
            </div>
            <div className="absolute bottom-0 right-0 left-0 h-64 z-0 pt-[calc(100lvh-100svh)]">
                <div className="container mx-auto p-6 pt-12 flex h-full">
                    <div className="grow">
                        <p className="font-semibold text-white">Q6 Technologies, LLC</p>
                        <p className="mt-3">Made with Love in Texas, USA.</p>
                        <p className="">Copyright © {year}</p>
                    </div>
                    <div className="flex flex-col ps-3">
                        <div className="font-semibold border-b mb-3 pb-1 border-gray-400">Links</div>
                        <Link to="/meet-the-team" className="mb-1 link md:link-hover text-white">Meet the Team</Link>
                        <Link to="/contact-us" className="mb-1 link md:link-hover text-white">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
