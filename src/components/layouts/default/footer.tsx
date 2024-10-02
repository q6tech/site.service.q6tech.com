import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="h-64 text-gray-300 bg-gray-950">
            <div className="w-full h-4 bg-white rounded-b-xl" />
            <div className="absolute bottom-0 right-0 left-0 h-64 z-0">
                <div className="container mx-auto p-6 pt-12 flex h-full">
                    <div>
                        <p className="font-semibold">Q6 Technologies, LLC</p>
                        <p className="">Made with Love in Texas, USA.</p>
                    </div>

                    <div className="flex flex-col ms-auto">
                        <div className="font-semibold border-b mb-3 pb-1 border-gray-400">Links</div>
                        <Link to="/meet-the-team" className="mb-1 link link-hover">Meet the Team</Link>
                        <Link to="/contact-us" className="mb-1 link link-hover">Contact Us</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
