import clsx from "clsx";

export function LandingPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white overflow-hidden relative z-10">
            <Hero />
        </main>
    );
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
