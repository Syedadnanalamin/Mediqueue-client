"use client";

import { useForm } from "react-hook-form";

const AddTutor = () => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        const tutorData = {
            tutorName: data.tutorName,
            photo: data.photo,
            subject: data.subject,
            availableDays: data.availableDays,
            timeSlot: `${data.startTime} - ${data.endTime}`,
            hourlyFee: Number(data.hourlyFee),
            totalSlot: Number(data.totalSlot),
            sessionStartDate: data.sessionStartDate,
            institution: data.institution,
            experience: data.experience,
            location: data.location,
            teachingMode: data.teachingMode,
        };

        console.log("form data is", data);

        try {
            const res = await fetch("http://localhost:8080/add-tutor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tutorData),
            });

            const result = await res.json();

            console.log(result);

            if (result.acknowledged) {
                alert("Tutor Added Successfully");
                reset();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <div className="bg-base-100 shadow-xl rounded-2xl p-8">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Add Tutor
                </h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >

                    {/* Tutor Name */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Tutor Name
                            </span>
                        </label>

                        <input
                            type="text"
                            className="input input-bordered"
                            placeholder="Tutor Name"
                            {...register("tutorName")}
                        />
                    </div>

                    {/* Photo */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Photo URL
                            </span>
                        </label>

                        <input
                            type="text"
                            className="input input-bordered"
                            placeholder="https://..."
                            {...register("photo")}
                        />
                    </div>

                    {/* Subject */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Subject
                            </span>
                        </label>

                        <select
                            className="select select-bordered"
                            {...register("subject")}
                        >
                            <option value="">Select Subject</option>
                            <option>Mathematics</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                            <option>English</option>
                            <option>ICT</option>
                            <option>CSE</option>
                        </select>
                    </div>

                    {/* Teaching Mode */}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">
                                Teaching Mode
                            </span>
                        </label>

                        <select
                            className="select select-bordered"
                            {...register("teachingMode")}
                        >
                            <option value="">Select Mode</option>
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Both</option>
                        </select>
                    </div>

                    {/* Available Days */}

                    <div className="md:col-span-2">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Available Days
                            </span>
                        </label>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

                            {[
                                "Sunday",
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                            ].map((day) => (

                                <label
                                    key={day}
                                    className="label cursor-pointer justify-start gap-2 border rounded-lg px-3 py-2"
                                >

                                    <input
                                        type="checkbox"
                                        value={day}
                                        className="checkbox checkbox-primary"
                                        {...register("availableDays")}
                                    />

                                    <span>{day}</span>

                                </label>

                            ))}

                        </div>

                    </div>

                    {/* Time Slot */}

                    <div className="md:col-span-2">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Available Time Slot
                            </span>
                        </label>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        Start Time
                                    </span>
                                </label>

                                <input
                                    type="time"
                                    className="input input-bordered"
                                    {...register("startTime")}
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">
                                        End Time
                                    </span>
                                </label>

                                <input
                                    type="time"
                                    className="input input-bordered"
                                    {...register("endTime")}
                                />
                            </div>

                        </div>

                    </div>

                    {/* Hourly Fee */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Hourly Fee
                            </span>
                        </label>

                        <input
                            type="number"
                            placeholder="500"
                            className="input input-bordered"
                            {...register("hourlyFee")}
                        />

                    </div>

                    {/* Total Slot */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Total Slot
                            </span>
                        </label>

                        <input
                            type="number"
                            placeholder="10"
                            className="input input-bordered"
                            {...register("totalSlot")}
                        />

                    </div>

                    {/* Session Start Date */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Session Start Date
                            </span>
                        </label>

                        <input
                            type="date"
                            className="input input-bordered"
                            {...register("sessionStartDate")}
                        />

                    </div>

                    {/* Institution */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Institution
                            </span>
                        </label>

                        <input
                            type="text"
                            placeholder="University / College"
                            className="input input-bordered"
                            {...register("institution")}
                        />

                    </div>

                    {/* Experience */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Experience
                            </span>
                        </label>

                        <input
                            type="text"
                            placeholder="5 Years"
                            className="input input-bordered"
                            {...register("experience")}
                        />

                    </div>

                    {/* Location */}

                    <div className="form-control">

                        <label className="label">
                            <span className="label-text font-semibold">
                                Location
                            </span>
                        </label>

                        <input
                            type="text"
                            placeholder="Mirpur, Dhaka"
                            className="input input-bordered"
                            {...register("location")}
                        />

                    </div>

                    {/* Submit Button */}

                    <div className="md:col-span-2 mt-4">

                        <button
                            type="submit"
                            className="btn btn-primary w-full text-lg"
                        >
                            Add Tutor
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default AddTutor;