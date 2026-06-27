import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-base-300 text-base-content mt-20">

            <div className="footer sm:footer-horizontal max-w-7xl mx-auto p-10">

                {/* Brand */}
                <aside>
                    <Link href="/" className="text-3xl font-bold text-primary">
                        MediQueue
                    </Link>

                    <p className="mt-3 max-w-xs">
                        Find experienced tutors, book sessions instantly,
                        and learn from anywhere with MediQueue.
                    </p>
                </aside>

                {/* Quick Links */}
                <nav>
                    <h6 className="footer-title">Quick Links</h6>

                    <Link href="/" className="link link-hover">
                        Home
                    </Link>

                    <Link href="/tutors" className="link link-hover">
                        Find Tutors
                    </Link>

                    <Link href="/add-tutor" className="link link-hover">
                        Add Tutor
                    </Link>

                    <Link href="/my-booked-sessions" className="link link-hover">
                        My Bookings
                    </Link>
                </nav>

                {/* Support */}
                <nav>
                    <h6 className="footer-title">Support</h6>

                    <a className="link link-hover">
                        FAQ
                    </a>

                    <a className="link link-hover">
                        Contact Us
                    </a>

                    <a className="link link-hover">
                        Privacy Policy
                    </a>

                    <a className="link link-hover">
                        Terms & Conditions
                    </a>
                </nav>

                {/* Contact */}
                <nav>
                    <h6 className="footer-title">Contact</h6>

                    <p>📍 Dhaka, Bangladesh</p>

                    <p>📧 support@mediqueue.com</p>

                    <p>📞 +880 1700-000000</p>
                </nav>

            </div>

            <div className="border-t border-base-200">

                <div className="max-w-7xl mx-auto py-5 px-6 flex flex-col md:flex-row items-center justify-between">

                    <p>
                        © {new Date().getFullYear()} MediQueue. All rights reserved.
                    </p>

                    <div className="flex gap-5 text-2xl">

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            🌐
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            💼
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            💻
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;