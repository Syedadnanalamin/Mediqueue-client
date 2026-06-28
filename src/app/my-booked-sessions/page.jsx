import DeleteTutor from "@/Components/DeleteTutor/DeleteTutor";
import { MyBookedtutors } from "@/lib/api";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { headers } from "next/headers";


export const metadata = {
    title: "My Booked Sessions",
};

const booked_sessions = async () => {
    const MyBookedtutorsDetails = await MyBookedtutors();

    const session = await auth.api.getSession({
        headers: await headers(),
    });
    const userName = session?.user?.name;


    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <h1 className="text-4xl font-bold text-center mb-8">
                My Booked Sessions
            </h1>

            {MyBookedtutorsDetails.length === 0 ? (
                <div className="bg-base-100 shadow rounded-xl p-16 text-center">

                    <h2 className="text-3xl font-bold">
                        No Bookings Found
                    </h2>

                    <p className="text-gray-500 mt-3">
                        You havent booked any tutoring session yet.
                    </p>

                </div>
            ) : (

                <div className="overflow-x-auto rounded-xl shadow">

                    <table className="table table-zebra">

                        <thead className="bg-primary text-white">

                            <tr>

                                <th>#</th>
                                <th>Tutor Name</th>
                                <th>Student Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {MyBookedtutorsDetails.map((booking, index) => (

                                <tr key={booking._id}>

                                    <td>{index + 1}</td>

                                    <td className="font-semibold">
                                        {booking.name}
                                    </td>

                                    <td>
                                        {userName}
                                    </td>

                                    <td>
                                        {booking.email}
                                    </td>

                                    <td>

                                        <span className="badge badge-warning badge-outline">
                                            Pending
                                        </span>

                                    </td>

                                    <td>

                                        <DeleteTutor tutorId={booking._id}></DeleteTutor>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
};

export default booked_sessions;