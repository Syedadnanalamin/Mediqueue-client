"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from "react-hot-toast";
import { useState } from "react";

const Card = ({ tutor }) => {

    const handleBookingToast = () => {
        toast.success("Opening tutor details...", {
            duration: 1500,
            icon: "📚",
            style: {
                borderRadius: "14px",
                background: "#1f2937",
                color: "#fff",
                padding: "14px 18px",
                fontWeight: "500",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
            },
        });
    };


    return (
        <div>
            <div className="card bg-base-100 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden">
                <figure className="overflow-hidden">
                    <Image
                        src={tutor.photo}
                        alt={tutor.name}
                        width={400}
                        height={220}
                        className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    />
                </figure>

                <div className="card-body p-6">
                    <h2 className="card-title text-2xl font-bold text-gray-800">
                        {tutor.name}
                    </h2>

                    <div className="badge badge-primary badge-outline w-fit">
                        {tutor.subject}
                    </div>

                    <div className="space-y-2 mt-3 text-gray-600">
                        <p>
                            <span className="font-semibold text-gray-800">
                                Available Days:
                            </span>{" "}
                            {Array.isArray(tutor.availableDays)
                                ? tutor.availableDays.join(", ")
                                : tutor.availableDays}
                        </p>

                        <p>
                            <span className="font-semibold text-gray-800">
                                Location:
                            </span>{" "}
                            {tutor.location}
                        </p>
                    </div>

                    <div className="divider my-2"></div>

                    <div className="card-actions justify-between items-center">
                        <p className="text-lg font-bold text-primary">
                            ${tutor.hourlyFee}
                            <span className="text-sm text-gray-500 font-normal">
                                {" "}
                                / hour
                            </span>
                        </p>

                        <Link
                            href={`/tutors/details/${tutor._id}`}
                            onClick={handleBookingToast}
                            className="btn btn-primary rounded-xl px-6"
                        >
                            Book Session
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;