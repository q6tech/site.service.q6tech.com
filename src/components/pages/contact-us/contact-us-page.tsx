import { Helmet } from "react-helmet-async";

export function ContactUsPage() {
    return (
        <div className="flex flex-col">

            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>

            <header className="text-center prose mx-auto mb-12">
                <h1 className="text-6xl font-normal mt-12 mb-3">
                    Contact Us!
                </h1>
                <p className="mb-0">
                    Want to setup a video call, get a quote, or just say hi?
                </p>
                <p className="mt-0">
                    We're just an email away!
                </p>
            </header>

            <article className="flex flex-col items-center justify-center">

                <a className="text-2xl px-6 py-3 rounded-2xl bg-purple-900 text-white mx-auto mt-6 transition-colors hover:bg-purple-800" href="mailto:hello@q6tech.com" role="button">Email Us</a>

                <p aria-hidden className="text-opacity-30 mt-3 font-semibold text-sm opacity-90">
                    (hello@q6tech.com)
                </p>

            </article>

        </div>
    )
}
