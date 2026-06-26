"use client";

import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const { data: res, error } = await authClient.signUp.email({
            name: data.name, // required
            email: data.email, // required
            password: data.password, // required
            image: data.photoURL,
            // callbackURL: "https://example.com/callback",
        });
        console.log(res);

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

            <div className="card w-full max-w-md bg-base-100 shadow-2xl">

                <div className="card-body">

                    <h1 className="text-3xl font-bold text-center mb-4">
                        Register Now
                    </h1>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >

                        {/* Name */}
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className={`input input-bordered w-full ${errors.name && "input-error"
                                    }`}
                                {...register("name", {
                                    required: "Name is required",
                                })}
                            />

                            {errors.name && (
                                <p className="text-error text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={`input input-bordered w-full ${errors.email && "input-error"
                                    }`}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value:
                                            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />

                            {errors.email && (
                                <p className="text-error text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>

                            <input
                                type="url"
                                placeholder="https://example.com/photo.jpg"
                                className={`input input-bordered w-full ${errors.photoURL && "input-error"
                                    }`}
                                {...register("photoURL", {
                                    required: "Photo URL is required",
                                })}
                            />

                            {errors.photoURL && (
                                <p className="text-error text-sm mt-1">
                                    {errors.photoURL.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Enter your password"
                                className={`input input-bordered w-full ${errors.password && "input-error"
                                    }`}
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message:
                                            "Password must be at least 6 characters",
                                    },
                                    pattern: {
                                        value:
                                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                                        message:
                                            "Must contain uppercase, lowercase and number",
                                    },
                                })}
                            />

                            {errors.password && (
                                <p className="text-error text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-3"
                        >
                            Register
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}