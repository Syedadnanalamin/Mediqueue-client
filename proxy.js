import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export default async function proxy(request) {
    const session = await auth.api.getSession({

        headers: await headers() // headers containing the user's session token
    });



    if (!session) {
        return NextResponse.redirect(new URL("/login", request.url));
    }


    return NextResponse.next();
}

export const config = {
    matcher:
        [
            "/add-tutor/:path*",
            "/my-tutors/:path*",
            "/my-booked-sessions/:path*",
            "/tutors/details/:path*"
        ],
}