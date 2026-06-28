import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
    FaUser,
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaFish,
} from "react-icons/fa";

import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [form, setForm] = useState({

        name: "",

        email: "",

        password: "",

        password_confirmation: "",

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (form.password !== form.password_confirmation) {

            toast.error("Password confirmation does not match.");

            return;

        }

        setLoading(true);

        try {

            await register(form);

            toast.success("Registration successful.");

            navigate("/login");

        }

        catch (err) {

            console.log(err);

            toast.error(

                err?.response?.data?.message ||

                "Registration failed."

            );

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-white flex items-center justify-center p-6">

            <motion.div

                initial={{ opacity: 0, y: 30 }}

                animate={{ opacity: 1, y: 0 }}

                className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-10"

            >

                <div className="text-center">

                    <div className="w-20 h-20 rounded-full bg-teal-600 text-white flex items-center justify-center mx-auto">

                        <FaFish size={34} />

                    </div>

                    <h1 className="text-3xl font-bold mt-5">

                        FishCare AI

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Create your account

                    </p>

                </div>

                <form

                    onSubmit={handleSubmit}

                    className="space-y-5 mt-8"

                >

                    {/* NAME */}

                    <div>

                        <label className="font-medium">

                            Full Name

                        </label>

                        <div className="relative mt-2">

                            <FaUser className="absolute left-4 top-4 text-slate-400" />

                            <input

                                type="text"

                                name="name"

                                value={form.name}

                                onChange={handleChange}

                                placeholder="Enter your full name"

                                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                required

                            />

                        </div>

                    </div>

                    {/* EMAIL */}

                    <div>

                        <label className="font-medium">

                            Email

                        </label>

                        <div className="relative mt-2">

                            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

                            <input

                                type="email"

                                name="email"

                                value={form.email}

                                onChange={handleChange}

                                placeholder="Enter your email"

                                className="w-full border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                required

                            />

                        </div>

                    </div>

                    {/* PASSWORD */}

                    <div>

                        <label className="font-medium">

                            Password

                        </label>

                        <div className="relative mt-2">

                            <FaLock className="absolute left-4 top-4 text-slate-400" />

                            <input

                                type={showPassword ? "text" : "password"}

                                name="password"

                                value={form.password}

                                onChange={handleChange}

                                placeholder="Enter password"

                                className="w-full border rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                required

                            />

                            <button

                                type="button"

                                onClick={() => setShowPassword(!showPassword)}

                                className="absolute right-4 top-4 text-slate-500"

                            >

                                {

                                    showPassword

                                        ?

                                        <FaEyeSlash />

                                        :

                                        <FaEye />

                                }

                            </button>

                        </div>

                    </div>
                    {/* CONFIRM PASSWORD */}

                    <div>

                        <label className="font-medium">

                            Confirm Password

                        </label>

                        <div className="relative mt-2">

                            <FaLock className="absolute left-4 top-4 text-slate-400" />

                            <input

                                type={showConfirmPassword ? "text" : "password"}

                                name="password_confirmation"

                                value={form.password_confirmation}

                                onChange={handleChange}

                                placeholder="Confirm password"

                                className="w-full border rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                required

                            />

                            <button

                                type="button"

                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }

                                className="absolute right-4 top-4 text-slate-500"

                            >

                                {

                                    showConfirmPassword

                                        ?

                                        <FaEyeSlash />

                                        :

                                        <FaEye />

                                }

                            </button>

                        </div>

                    </div>

                    {/* BUTTON */}

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-teal-600 hover:bg-teal-700 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"

                    >

                        {

                            loading

                                ?

                                "Creating Account..."

                                :

                                "Register"

                        }

                    </button>

                </form>

                <div className="mt-8 text-center">

                    <p className="text-slate-500">

                        Already have an account?

                    </p>

                    <Link

                        to="/login"

                        className="text-teal-600 font-semibold hover:underline"

                    >

                        Login Here

                    </Link>

                </div>

            </motion.div>

        </div>

    );

}

export default Register;                    