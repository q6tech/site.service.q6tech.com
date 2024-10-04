import { PropsWithChildren } from "react";

export type ExpertiseCardProps = {
    name: string;
    image: URL;
}

export function ExpertiseCard({ name, image, children }: PropsWithChildren<ExpertiseCardProps>) {
    return (
        <div className="p-3 w-full max-w-full lg:max-w-[50%]">

            <div className="border rounded p-6">
                {children}
            </div>

        </div>
    )
}
