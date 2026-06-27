"use client";
import Gbutton from "@/Components/GoogleButton/Gbutton";
import { authClient } from "@/lib/auth-client";
import { error } from "better-auth/api";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function LoginPage() {

    console.log(3)

    const [Error, setError] = useState("");
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            callbackURL: "http://localhost:3000/tutors",
        });

        if (error) {
            setError(error.message)
            return;
        }
        if (res) {
            console.log(res)
        }


    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">

            <div className="card w-full max-w-md bg-base-100 shadow-2xl">

                <div className="card-body">

                    <h1 className="text-3xl font-bold text-center mb-4">
                        Login
                    </h1>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4"
                    >

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
                                })}
                            />

                            {errors.password && (
                                <p className="text-error text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div>{error && <p className="text-red-400">{Error}</p>}</div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-3"
                        >
                            Login
                        </button>

                    </form>

                    <Gbutton></Gbutton>

                </div>

            </div>

        </div>
    );
}