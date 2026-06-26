import { specificTutor } from '@/lib/api';
import React from 'react';
import Image from "next/image";
const Detailpage = async ({ params }) => {
    const { id } = await params;
    const specificTutorDetails = await specificTutor(id);
    const tutor = specificTutorDetails[0];
    return (
        <div className="max-w-7xl mx-auto px-4 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Side */}
                <div className="lg:col-span-2 bg-base-100 rounded-2xl shadow-lg overflow-hidden">

                    <Image
                        src={tutor.photo}
                        alt={tutor.name}
                        width={1200}
                        height={500}
                        className="w-full h-[400px] object-cover"
                    />

                    <div className="p-8">

                        <div className="flex flex-wrap justify-between items-start gap-4">

                            <div>
                                <h1 className="text-4xl font-bold">
                                    {tutor.name}
                                </h1>

                                <p className="text-primary text-lg mt-2">
                                    {tutor.subject}
                                </p>
                            </div>

                            <div className="badge badge-primary badge-lg">
                                {tutor.teachingMode}
                            </div>

                        </div>

                        <div className="divider"></div>

                        <div className="grid md:grid-cols-2 gap-6">

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Institution
                                </h3>

                                <p>{tutor.institution}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Experience
                                </h3>

                                <p>{tutor.experience}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Available Days
                                </h3>

                                <p>{tutor.availableDays}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Time Slot
                                </h3>

                                <p>{tutor.timeSlot}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Location
                                </h3>

                                <p>{tutor.location}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Email
                                </h3>

                                <p>{tutor.email}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Session Starts
                                </h3>

                                <p>{tutor.sessionStartDate}</p>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg">
                                    Available Slots
                                </h3>

                                <p>{tutor.totalSlot}</p>
                            </div>

                        </div>

                    </div>

                </div>

                {/* Right Side */}

                <div>

                    <div className="bg-base-100 rounded-2xl shadow-lg p-6 lg:sticky top-24">

                        <h2 className="text-2xl font-bold mb-6">
                            Booking Information
                        </h2>

                        <div className="space-y-4">

                            <div className="flex justify-between">
                                <span>Hourly Fee</span>
                                <span className="font-bold text-primary">
                                    ${tutor.hourlyFee}
                                </span>
                            </div>

                            <div className="flex justify-between">
                                <span>Teaching Mode</span>
                                <span>{tutor.teachingMode}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Subject</span>
                                <span>{tutor.subject}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Available Slots</span>
                                <span>{tutor.totalSlot}</span>
                            </div>

                        </div>

                        <div className="divider"></div>

                        <button className="btn btn-primary w-full">
                            Book Session
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Detailpage;