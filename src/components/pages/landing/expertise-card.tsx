import { PropsWithChildren } from "react";

export type ExpertiseCardProps = {
    name: string;
    image: URL;
}

export function ExpertiseCard({ name, image, children }: PropsWithChildren<ExpertiseCardProps>) {
    return (

        <section className="border rounded px-6 py-9 flex">
            <div className="basis-1/4">
                <img className="w-full h-auto" src={image.toString()} aria-hidden />
            </div>
            <div className="ps-6">
                <header className="mb-3">
                    <h2 className="text-3xl">{name}</h2>
                </header>
                <p className="prose">
                    {children}
                </p>
            </div>
        </section>
    )
}
