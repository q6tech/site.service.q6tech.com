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
        <div className="flex flex-col h-full mt-24">
            <div className="flex flex-col rounded-lg items-center">

                <div className="relative px-16 pt-14 pb-12">
                    <div className="text-5xl lg:text-6xl text-gray-950 text-center animate-fade animate-ease-in-out">
                        Quality in Engineering
                    </div>
                    <div className="text-2xl text-end text-gray-600 mt-2 animate-fade animate-ease-in-out animate-delay-300">
                        It's in the name.
                    </div>
                    <div className="absolute top-4 left-4 h-20 w-20 border-purple-900 border-t-4 border-s-4" />
                    <div className="absolute bottom-4 right-4 h-20 w-20 border-purple-900 border-b-4 border-e-4" />
                </div>

                <Link className="px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-12 transition-colors hover:bg-purple-800"
                    to="/contact-us"
                    role="button">Contact Us</Link>

                <div className="text-center prose mx-auto mb-6 mt-6">
                    <h1 className="text-2xl font-normal mt-12 mb-3">
                        What We Do
                    </h1>
                    <div className="mx-auto w-24 mt-5 h-1 bg-purple-900" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 mb-12 gap-3">
                    <ExpertiseCard name="API's" image={new URL("./assets/api.webp", import.meta.url)}>
                        <p>
                            Ah, API's - the unsung heroes of the digital world. They're the behind-the-scenes magic that makes your favorite apps and services talk to each other seamlessly. But, let's be real, a poorly designed API can be a real party pooper.
                        </p>
                        <p>
                            At Q6 Technologies, we're the API whisperers. Our passion is crafting APIs that are not only functional but also elegant, scalable, and secure. We believe that a well-designed API is not just a nicety, but a necessity for any business that wants to stay ahead of the curve.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Websites" image={new URL("./assets/websites.webp", import.meta.url)}>
                        <p>
                            If eyes are the window to the soul, then websites are the gateway to API's. Websites are the first and last thing customers see.
                        </p>
                        <p>
                            At Q6 Technologies, we believe that a great API is only as good as the website that uses it. That's why we're dedicated to crafting not only exceptional APIs but also stunning websites that bring your brand to life.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Databases" image={new URL("./assets/databases.webp", import.meta.url)}>
                        <p>
                            At Q6 Technologies, we're obsessed with quality in engineering - and that's especially true when it comes to databases. Our team of experts has spent years mastering the dark arts of database design, development, and optimization. We're talking query ninjas, indexing wizards, and data modeling masters.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Networking" image={new URL("./assets/networking.webp", import.meta.url)}>
                        <p>
                            At Q6 Technologies, we know that a strong network is the backbone of any successful operation. That's why our team is dedicated to designing, building, and maintaining networks that are as robust as they are reliable. Existing networks beware, we also can also make existing problems go away.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Storage" image={new URL("./assets/storage.webp", import.meta.url)}>
                        <p>
                            At Q6 Technologies, we're all about "Quality in Engineering" - and when it comes to storage, we're the pros you want on your team. Our expertise in storage solutions like Ceph is unmatched, and we're not afraid to geek out about it.
                        </p>
                    </ExpertiseCard>
                    <ExpertiseCard name="Security" image={new URL("./assets/security.webp", import.meta.url)}>
                        <p>
                            At Q6 Technologies, we know that security is the secret ingredient that makes your product go from "meh" to "mission-critical". Think of us as your ninja warriors, stealthily protecting your users from the shadows.
                        </p>
                    </ExpertiseCard>
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
