import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaFish,
} from "react-icons/fa";

import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const result = await login(email, password);

            console.log("LOGIN RESULT =", result);

            localStorage.setItem("token", result.token);

            localStorage.setItem(
                "user",
                JSON.stringify(result.user)
);

            console.log("TOKEN =", localStorage.getItem("token"));

            toast.success("Login successful.");

            window.location.href = "/dashboard";

        }
        catch (err) {

            console.log("LOGIN ERROR =", err.response);

            toast.error(
                err.response?.data?.message || "Login gagal."
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

                        Welcome Back

                    </p>

                </div>

                <form

                    onSubmit={handleLogin}

                    className="space-y-5 mt-8"

                >

                    {/* EMAIL */}

                    <div>

                        <label className="font-medium">

                            Email

                        </label>

                        <div className="relative mt-2">

                            <FaEnvelope className="absolute left-4 top-4 text-slate-400" />

                            <input

                                type="email"

                                value={email}

                                onChange={(e)=>setEmail(e.target.value)}

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

                                value={password}

                                onChange={(e)=>setPassword(e.target.value)}

                                placeholder="Enter your password"

                                className="w-full border rounded-xl py-3 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-teal-500"

                                required

                            />

                            <button

                                type="button"

                                onClick={()=>setShowPassword(!showPassword)}

                                className="absolute right-4 top-4 text-slate-500"

                            >

                                {

                                    showPassword

                                        ?

                                        <FaEyeSlash/>

                                        :

                                        <FaEye/>

                                }

                            </button>

                        </div>

                    </div>
                    {/* LOGIN BUTTON */}

                    <button

                        type="submit"

                        disabled={loading}

                        className="w-full bg-teal-600 hover:bg-teal-700 transition text-white py-3 rounded-xl font-semibold disabled:opacity-50"

                    >

                        {

                            loading

                                ?

                                "Signing In..."

                                :

                                "Login"

                        }

                    </button>

                </form>

                {/* DIVIDER */}

                <div className="flex items-center my-8">

                    <div className="flex-1 border-t"></div>

                    <span className="px-4 text-slate-400 text-sm">

                        OR

                    </span>

                    <div className="flex-1 border-t"></div>

                </div>

                {/* REGISTER */}

                <div className="text-center">

                    <p className="text-slate-500">

                        Don't have an account?

                    </p>

                    <Link

                        to="/register"

                        className="inline-block mt-3 w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white transition py-3 rounded-xl font-semibold"

                    >

                        Create Account

                    </Link>

                </div>

            </motion.div>

        </div>

    );

}

export default Login;