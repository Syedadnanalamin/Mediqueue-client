import Card from "@/Components/Homepage/AvailableTutors/Card";
import TutorsFilter from "@/Components/TutorsFilter/TutorsFilter";

export const metadata = {
    title: "All Tutors",
};

const TutorsPage = async ({ searchParams }) => {
    const params = await searchParams;
    const search = params.search || "";
    const startDate = params.startDate || "";
    const endDate = params.endDate || "";

    const query = new URLSearchParams();
    if (search) query.set("search", search);
    if (startDate) query.set("startDate", startDate);
    if (endDate) query.set("endDate", endDate);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?${query.toString()}`, {
        cache: "no-store",
    });
    const Tutors = await res.json();

    return (
        <div className='w-full mt-6 px-4 py-8 max-w-7xl mx-auto'>
            <h1 className='text-4xl font-extrabold text-center mb-8'>Find Available Tutors</h1>

            <TutorsFilter />

            {Tutors.length === 0 ? (
                <div className="bg-base-100 shadow rounded-xl p-16 text-center border border-base-300 max-w-4xl mx-auto mt-6">
                    <h2 className="text-3xl font-bold">No Tutors Found</h2>
                    <p className="text-gray-500 mt-3">
                        Try adjusting your search criteria or resetting the filters.
                    </p>
                </div>
            ) : (
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8 mt-5'>
                    {Tutors.map((tutor) => <Card key={tutor._id} tutor={tutor}></Card>)}
                </div>
            )}
        </div>
    );
};

export default TutorsPage;