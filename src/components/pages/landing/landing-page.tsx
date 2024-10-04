import clsx from "clsx";
import { Link } from "react-router-dom";
import { ExpertiseCard } from "./expertise-card";

export function LandingPage() {
    return (
        <div className="flex flex-col">
            <Hero />
        </div>
    );
}

function Hero() {

    return (
        <div className="flex flex-col h-full min-h-fit mt-24">
            <div className="grow flex justify-center items-center">
                <div className="flex flex-col rounded-lg items-center">

                    <div className="relative px-16 pt-14 pb-12">
                        <div className="text-6xl text-gray-950 text-center animate-fade animate-ease-in-out">
                            Quality in Engineering
                        </div>
                        <div className="text-2xl text-end text-gray-600 mt-2 animate-fade animate-ease-in-out animate-delay-300">
                            It's in the name.
                        </div>
                        <div className="absolute hidden md:block top-0 left-0 h-20 w-20 border-purple-900 border-t-4 border-s-4" />
                        <div className="absolute hidden md:block bottom-0 right-0 h-20 w-20 border-purple-900 border-b-4 border-e-4" />
                    </div>

                    <Link className="px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-12 transition-colors hover:bg-purple-800"
                        to="/contact-us"
                        role="button">Contact Us</Link>

                    <div className="text-center prose mx-auto mb-6 mt-6">
                        <h1 className="text-2xl font-normal mt-12 mb-3">
                            What We Can Do
                        </h1>
                        <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                    </div>

                    <div className="flex flex-wrap mb-6">
                        <ExpertiseCard name="API's" image={new URL("./assets/api.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                        <ExpertiseCard name="Websites" image={new URL("./assets/websites.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                        <ExpertiseCard name="Databases" image={new URL("./assets/databases.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                        <ExpertiseCard name="Networking" image={new URL("./assets/networking.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                        <ExpertiseCard name="Storage" image={new URL("./assets/storage.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                        <ExpertiseCard name="Security" image={new URL("./assets/security.webp", import.meta.url)}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ExpertiseCard>
                    </div>
                </div>
            </div>
        </div>
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
