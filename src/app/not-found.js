import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="max-w-xl text-center">

                <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
                    404
                </h1>

                <h2 className="text-4xl font-bold mt-6">
                    Oops! Page Not Found
                </h2>

                <p className="text-base-content/70 mt-4 text-lg leading-relaxed">
                    The page you are looking for doesn't exist or may have been moved.
                    Please check the URL or return to the homepage.
                </p>

                <div className="mt-10 flex justify-center gap-4">

                    <Link
                        href="/"
                        className="btn btn-primary px-8 rounded-xl"
                    >
                        Go Home
                    </Link>

                    <button
                    >
                        <Link href={"/"}>Go Back</Link>
                    </button>

                </div>

            </div>
        </div>
    );
}