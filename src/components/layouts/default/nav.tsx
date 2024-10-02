import { FaPaperPlane, FaPeoplePulling } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Nav() {
    return (
        <div className="fixed border-b border-opacity-10 pb-3 w-full bg-white/60 backdrop-blur-xl select-none z-20">
            <nav className="container mx-auto flex mt-6 mb-3 px-6 items-center" role="banner">
                <div className="flex items-center">
                    <Link to="/" className="brand-mark h-8 me-2 mt-1" aria-label="Q6 Technologies Logo"></Link>
                </div>
                <ul className="list-none font-semibold flex items-end text-gray-950 ms-auto">
                    <li className="ms-9 flex items-center">
                        <FaPeoplePulling className="me-2" />
                        <Link to="/meet-the-team" className="link link-hover">Meet the Team</Link>
                    </li>
                    <li className="ms-9 flex items-center">
                        <FaPaperPlane className="me-2" />
                        <Link to="/contact-us" className="link link-hover">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
