'use client';
import { usePathname } from "next/navigation";
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const router = useRouter();

    const pathname = usePathname();
    const activeClass = "text-primary font-bold";

    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const clearSession = async () => {
        await authClient.signOut();
        router.push('/login');
        router.refresh();
    };


    const navLinks = (
        // <>
        //     <li>
        //         <Link href="/">Home</Link>
        //     </li>

        //     <li>
        //         <Link href="/tutors">Tutors</Link>
        //     </li>

        //     {session && (
        //         <>
        //             <li>
        //                 <Link href="/add-tutor">Add Tutor</Link>
        //             </li>

        //             <li>
        //                 <Link href={`/my-tutors/${session.user.id}`}>My Tutors</Link>
        //             </li>

        //             <li>
        //                 <Link href="/my-booked-sessions">
        //                     My Booked Sessions
        //                 </Link>
        //             </li>
        //         </>
        //     )}
        // </>

        <>
            <li>
                <Link
                    href="/"
                    className={pathname === "/" ? activeClass : ""}
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/tutors"
                    className={pathname.startsWith("/tutors") ? activeClass : ""}
                >
                    Tutors
                </Link>
            </li>

            {session && (
                <>
                    <li>
                        <Link
                            href="/add-tutor"
                            className={pathname === "/add-tutor" ? activeClass : ""}
                        >
                            Add Tutor
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={`/my-tutors/${session.user.id}`}
                            className={pathname.startsWith("/my-tutors") ? activeClass : ""}
                        >
                            My Tutors
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/my-booked-sessions"
                            className={pathname.startsWith("/my-booked-sessions") ? activeClass : ""}
                        >
                            My Booked Sessions
                        </Link>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                {/* Left */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost text-xl">
                        <Image
                            src="/assets/logo.png"
                            alt="TutorBook Logo"
                            width={200}
                            height={200}
                        />

                    </Link>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>

                {/* Right */}
                <div className="navbar-end gap-2">
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? (
                            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                            </svg>
                        )}
                    </button>
                    {session ? (
                        <>
                            <p>{`Hello,${session.user.name}`}</p>
                            <button
                                onClick={clearSession}
                                className="btn btn-error text-white"
                            >
                                Logout
                            </button>

                            <Image src={session.user.image} alt="profile" height={40} width={40} className="rounded-full"></Image>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="btn">
                                Login
                            </Link>

                            <Link
                                href="/signup"
                                className="btn btn-primary"
                            >
                                Signup
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;