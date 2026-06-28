import { headers } from "next/headers";
import { auth } from "./auth";

export const TutorsAvaiable = async () => {

    const res = await fetch(process.env.NEXT_PUBLIC_SERVER_URL);
    return res.json();
}
export const AlltutorsData = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
    return res.json();
}

export const specificTutor = async (id) => {


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/details/${id}`);
    return res.json();
}



export async function handleBookingSubmit(formData) {
    "use server"

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const UserId = session?.user?.id;
    const bookingData = {
        UserId,
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        tutorId: formData.get("tutorId"),
        tutorName: formData.get("tutorName"),
    }


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/details/${bookingData.tutorId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)

    });

    // এখানে MongoDB insert করবে
}


// my-booked-sessions


export const MyBookedtutors = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const UserId = session?.user?.id;
    if (!UserId) return [];
    const BookedTutorid = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-booked-sessions/${UserId}`);
    const resBookedTutorid = await BookedTutorid.json();
    return resBookedTutorid;

}


