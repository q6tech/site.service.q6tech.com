import { ReactNode } from "react";

export type MemberProps = {
    name: string;
    title: string;
    email: string;
    image: URL;
    description: ReactNode;
}

export function Member({ name, title, email, image, description }: MemberProps) {
    return (
        <section className="flex flex-col md:flex-row pe-9 mb-9 items-center md:items-start relative w-full lg:w-1/2 ">

            <div className="shrink-0 w-32 h-32 rounded-xl border px-3 pt-3 bg-purple-100">
                <img className="w-full h-full" src={image.toString()} alt={`${name}'s headshot.`} />
            </div>

            <div className="grow px-6 prose flex flex-col prose-p:mt-0 prose-p:mb-2">
                <h2 className="text-4xl font-normal mb-1 md:mb-0 text-center md:text-start mt-3 md:mt-0">{name}</h2>
                <div className="flex justify-center md:justify-start">
                    <span>{title}</span>
                    <span className="mx-2">•</span>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
                <div className="mt-3 mb-3">
                    {description}
                </div>
            </div>

            <div className="absolute hidden md:block bottom-0 right-0 h-16 w-16 border-purple-900 border-b-4 border-e-4" />

        </section>
    )
}
