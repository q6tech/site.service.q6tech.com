import clsx from "clsx";
import { FaPaperPlane, FaPeoplePulling } from "react-icons/fa6";

export function LandingPage() {
    return (
        <div className="bg-gray-950 overflow-auto h-screen z-0">
            <main className="h-screen max-h-screen flex flex-col bg-white rounded-b-[3rem] border-b-8 border-gray-950 overflow-hidden relative z-10">
                <Nav />
                <Hero />
            </main>
            <Footer />
        </div>
    );
}

function Nav() {
    return (
        <div className="fixed border-b border-opacity-10 pb-3 w-full bg-white/60 z-20 backdrop-blur-xl">
            <nav className="container mx-auto flex mt-6 mb-3 px-6 items-center" role="banner">
                <div className="flex items-center">
                    <div className="brand-mark h-6 w-6 me-2 mt-1"></div>
                    <span className="font-brand text-2xl text-gray-950">Q6 Technologies</span>
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

function Hero() {

    return (
        <div className="flex flex-col h-full min-h-fit mt-24">
            <div className="grow flex justify-center items-center">
                <div className="flex flex-col rounded-lg">
                    <div className="text-8xl text-gray-950 text-center animate-fade animate-ease-in-out">
                        Be <span className="font-bold hero-bold-text">Bold!</span>
                    </div>
                    <div className="text-3xl text-center text-gray-600 ms-32 animate-fade animate-ease-in-out animate-delay-300">
                        Let us help.
                    </div>
                    <Areas />
                    <a className="px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-12 transition-colors hover:bg-purple-800"
                        href="#"
                        role="button">Contact Us</a>
                </div>
            </div>
            <div className="mt-auto p-6">
                <p className="text-center text-gray-600">Quality in engineering.</p>
            </div>
        </div>
    )
}

function Footer() {
    return (
        <footer className="h-64 text-gray-300">
            <div className="absolute bottom-0 right-0 left-0 h-64">
                <div className="container mx-auto p-6 flex h-full">
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

function Areas() {

    const apiImg = new URL("./assets/api.webp", import.meta.url);
    const databasesImg = new URL("./assets/databases.webp", import.meta.url);
    const securityImg = new URL("./assets/security.webp", import.meta.url);
    const storageImg = new URL("./assets/storage.webp", import.meta.url);
    const websitesImg = new URL("./assets/websites.webp", import.meta.url);
    const networkingImg = new URL("./assets/networking.webp", import.meta.url);

    return (
        <div className="mx-6 mt-12">
            <div className="mx-3 mb-3 font-semibold text-gray-600">Expertise</div>
            <div className="flex justify-center max-w-full">
                <AreaCard image={apiImg} subTitle="API's" />
                <AreaCard image={websitesImg} subTitle="Websites" />
                <AreaCard image={databasesImg} subTitle="Databases" />
                <AreaCard image={storageImg} subTitle="Storage" />
                <AreaCard image={networkingImg} subTitle="Networking" />
                <AreaCard image={securityImg} subTitle="Security" />
            </div>
        </div>
    )
}

type AreaCardProps = {
    image: URL,
    subTitle: string
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function AreaCard({ className, image, subTitle, ...props }: AreaCardProps) {
    return (
        <div className={clsx("h-48 w-32 border rounded-xl mx-3 relative overflow-hidden pointer-events-none select-none animate-fade-left", className)}
            aria-label={subTitle}
            {...props}>
            <div className="absolute -top-6 -left-1/2 w-52 h-52">
                <img src={image.toString()}></img>
            </div>
            <div className="absolute -top-6 -left-1/2 w-52 h-52">
                <img src={image.toString()}></img>
            </div>
            <div className="absolute -bottom-5 -left-10 area-card-subtitle-bg" />
            <div className="absolute bottom-4 left-0 w-full text-center font-semibold select-text">
                {subTitle}
            </div>
        </div>
    )
}
