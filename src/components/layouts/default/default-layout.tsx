import { FaPaperPlane, FaPeoplePulling } from "react-icons/fa6";
import { useOutlet } from "react-router-dom";

export function DefaultLayout() {
    const outlet = useOutlet();
    return (
        <div className="overflow-auto h-screen bg-white">
            <Nav />
            {/* New stacking context */}
            <main className="relative z-10 pt-24">
                {outlet}
            </main>
            <Footer />
        </div>
    )
}

function Nav() {
    return (
        <div className="fixed border-b border-opacity-10 pb-3 w-full bg-white/60 backdrop-blur-xl select-none z-20">
            <nav className="container mx-auto flex mt-6 mb-3 px-6 items-center" role="banner">
                <div className="flex items-center">
                    <div className="brand-mark h-8 me-2 mt-1" aria-label="Q6 Technologies Logo"></div>
                </div>
                <ul className="list-none font-semibold flex items-end text-gray-950 ms-auto">
                    <li className="ms-9 flex items-center">
                        <FaPeoplePulling className="me-2" />
                        <a className="link link-hover" href="#">Meet the Team</a>
                    </li>
                    <li className="ms-9 flex items-center">
                        <FaPaperPlane className="me-2" />
                        <a className="link link-hover" href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function Footer() {
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
                        <a className="mb-1 link link-hover" href="#">Meet the Team</a>
                        <a className="mb-1 link link-hover" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
