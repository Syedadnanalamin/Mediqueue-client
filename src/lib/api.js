import { headers } from "next/headers";
import { auth } from "./auth";

export const TutorsAvaiable = async () => {

    const res = await fetch("http://localhost:8080/");
    return res.json();
}
export const AlltutorsData = async () => {

    const res = await fetch("http://localhost:8080/tutors");
    return res.json();
}

export const specificTutor = async (id) => {


    const res = await fetch(`http://localhost:8080/tutors/details/${id}`);
    return res.json();
}



export async function handleBookingSubmit(formData) {
    "use server"

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const UserId = session.user.id;
    const bookingData = {
        UserId,
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        tutorId: formData.get("tutorId"),
        tutorName: formData.get("tutorName"),
    }


    const res = await fetch(`http://localhost:8080/tutors/details/${bookingData.tutorId}`, {
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

    const UserId = session.user.id;
    const BookedTutorid = await fetch(`http://localhost:8080/my-booked-sessions/${UserId}`);
    const resBookedTutorid = await BookedTutorid.json();
    return resBookedTutorid;

}


