// src/app/my-tutors/[id]/page.jsx

const MyTutors = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8080/my-tutors/${id}`, {
        cache: "no-store",
    });

    const tutors = await res.json();

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">My Tutors</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutors.map((tutor) => (
                    <div
                        key={tutor._id}
                        className="border rounded-xl p-5 shadow-md"
                    >
                        <img
                            src={tutor.photo}
                            alt={tutor.tutorName}
                            className="w-full h-52 object-cover rounded-lg"
                        />

                        <h2 className="text-xl font-bold mt-4">
                            {tutor.tutorName}
                        </h2>

                        <p>
                            <strong>Subject:</strong> {tutor.subject}
                        </p>

                        <p>
                            <strong>Institution:</strong> {tutor.institution}
                        </p>

                        <p>
                            <strong>Experience:</strong> {tutor.experience} years
                        </p>

                        <p>
                            <strong>Hourly Fee:</strong> ৳{tutor.hourlyFee}
                        </p>

                        <p>
                            <strong>Location:</strong> {tutor.location}
                        </p>

                        <p>
                            <strong>Teaching Mode:</strong> {tutor.teachingMode}
                        </p>

                        <p>
                            <strong>Time:</strong> {tutor.timeSlot}
                        </p>

                        <p>
                            <strong>Start Date:</strong> {tutor.sessionStartDate}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTutors;