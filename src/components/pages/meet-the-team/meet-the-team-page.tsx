import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

const members: MemberProps[] = [
    {
        name: "Ananth",
        title: "Co-founder, Likes People",
        email: "ananth@q6tech.com",
        image: new URL("./assets/ananth.webp", import.meta.url),
        description: (
            <p>
                Lorem ipsum dolor sit amet consetetur sed enim sanctus sit veniam et sed. Duis nonumy justo voluptua nulla ipsum accusam. Duis odio sadipscing invidunt lorem gubergren sit est zzril vero eirmod voluptua voluptua. Ea aliquyam sea takimata invidunt. Nulla justo eos consetetur erat duo elitr ipsum ut vero sit voluptua gubergren dolor delenit sit et. Suscipit dolor erat aliquip et eirmod. Lorem duis ea lorem nonumy duo praesent kasd. Sit vero rebum ipsum diam invidunt dolor consetetur ut ut eum kasd dolor lorem ipsum.
            </p>
        )
    },
    {
        name: "Drew",
        title: "Co-founder, Saw Space Jesus",
        email: "drew@q6tech.com",
        image: new URL("./assets/drew.webp", import.meta.url),
        description: (
            <p>
                Lorem ipsum dolor sit amet voluptua dolor consetetur amet stet duo vero eu voluptua accusam dolores ipsum. Te stet eirmod dolor blandit sit gubergren invidunt veniam. Autem nonummy luptatum ut esse amet sanctus consetetur justo ut nulla consequat gubergren et gubergren et dolore est et. Sadipscing eos eos ea eu et ipsum ipsum amet eirmod dolor vero dolore at dolores duo magna dolore. Dolore sit sed. Amet ipsum no dolor vulputate sed volutpat et clita consetetur mazim et aliquam lorem ut.
            </p>
        )
    },
    {
        name: "Mark",
        title: "Co-founder, Likes Computers",
        email: "mark@q6tech.com",
        image: new URL("./assets/mark.webp", import.meta.url),
        description: (
            <p>
                Lorem ipsum dolor sit amet takimata aliquyam sed est ipsum dolores aliquyam aliquyam consequat consetetur odio. Takimata aliquyam ipsum et. Voluptua odio ad duo. Eirmod sit sadipscing imperdiet magna labore ullamcorper commodo est kasd option amet odio dolor sit eros. Nisl rebum soluta magna at at sed commodo ut accusam sanctus nonumy facer est sed soluta blandit. In clita sadipscing liber sit accusam ipsum nonumy erat ea takimata facilisis sanctus accusam.
            </p>
        )
    }
]

export function MeetTheTeamPage() {
    return (
        <div className="flex flex-col">

            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>

            <header className="text-center prose mx-auto mb-12">
                <h1 className="text-6xl font-normal mt-12 mb-3">
                    Meet the Team!
                </h1>
                <p>
                    Meet the small group of highly skilled engineers, with 40+ years of combined experience.
                </p>
            </header>

            <article className="flex flex-wrap flex-col justify-center max-w-[65ch] mx-auto w-full">
                {members.map(x => (
                    <Member key={x.email} {...x} />
                ))}
            </article>

        </div>
    )
}

type MemberProps = {
    name: string;
    title: string;
    email: string;
    image: URL;
    description: ReactNode;
}

function Member({ name, title, email, image, description }: MemberProps) {
    return (
        <section className="w-full flex mb-6">

            <div className="shrink-0 w-32 h-32 rounded-xl border px-3 pt-3 bg-blue-100">
                <img className="w-full h-full" src={image.toString()} alt={`${name}'s headshot.`} />
            </div>

            <div className="grow px-6 prose flex flex-col">
                <h2 className="text-4xl font-normal mb-0">{name}</h2>
                <span>{title}</span>
                <a href={`mailto:${email}`}>{email}</a>
                {description}
            </div>

        </section>
    )
}
