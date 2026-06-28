import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
    FaFish,
    FaArrowRight,
    FaWater,
    FaChartLine,
    FaRobot
} from "react-icons/fa";

function Landing() {

    return (

        <div className="min-h-screen bg-gradient-to-br from-teal-700 via-cyan-600 to-sky-500 overflow-hidden">

            {/* Background Blur */}

            <div className="absolute w-96 h-96 bg-cyan-300 opacity-20 rounded-full blur-3xl top-10 left-10"></div>

            <div className="absolute w-[500px] h-[500px] bg-teal-300 opacity-20 rounded-full blur-3xl bottom-0 right-0"></div>

            {/* Navbar */}

            <nav className="relative z-10 flex justify-between items-center px-12 py-8">

                <motion.div

                    initial={{opacity:0,x:-40}}

                    animate={{opacity:1,x:0}}

                    className="flex items-center gap-4"

                >

                    <div className="w-14 h-14 rounded-full bg-white text-teal-700 flex justify-center items-center text-3xl shadow-lg">

                        <FaFish/>

                    </div>

                    <div>

                        <h1 className="text-white text-3xl font-bold">

                            FishCare AI

                        </h1>

                        <p className="text-cyan-100 text-sm">

                            Smart Aquaculture Platform

                        </p>

                    </div>

                </motion.div>

                <motion.div

                    initial={{opacity:0,x:40}}

                    animate={{opacity:1,x:0}}

                    className="flex gap-4"

                >

                    <Link

                        to="/login"

                        className="px-6 py-3 rounded-xl text-white border border-white hover:bg-white hover:text-teal-700 transition"

                    >

                        Login

                    </Link>

                    <Link

                        to="/register"

                        className="px-6 py-3 rounded-xl bg-white text-teal-700 font-semibold hover:scale-105 transition"

                    >

                        Register

                    </Link>

                </motion.div>

            </nav>

            {/* Hero */}

            <div className="relative z-10 max-w-7xl mx-auto px-12 mt-20 grid lg:grid-cols-2 gap-20 items-center">

                <motion.div

                    initial={{opacity:0,y:60}}

                    animate={{opacity:1,y:0}}

                    transition={{duration:.8}}

                >

                    <span className="inline-block bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full mb-8">

                        🐟 AI Powered Water Monitoring

                    </span>

                    <h1 className="text-6xl font-extrabold text-white leading-tight">

                        Smart Water

                        <br/>

                        Quality Analysis

                    </h1>

                    <p className="text-cyan-100 text-xl mt-8 leading-9">

                        FishCare AI membantu petani ikan
                        memonitor kualitas air,
                        memprediksi pertumbuhan ikan,
                        serta memberikan rekomendasi berbasis
                        Artificial Intelligence.

                    </p>

                    <div className="flex gap-5 mt-12">

                        <Link

                            to="/login"

                            className="bg-white text-teal-700 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 shadow-xl hover:scale-105 transition"

                        >

                            Login

                            <FaArrowRight/>

                        </Link>

                        <Link

                            to="/register"

                            className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-teal-700 transition"

                        >

                            Create Account

                        </Link>

                    </div>

                </motion.div>

                {/* Glass Card */}

                <motion.div

                    initial={{opacity:0,x:60}}

                    animate={{opacity:1,x:0}}

                    transition={{duration:.8}}

                    className="bg-white/20 backdrop-blur-xl rounded-[40px] p-10 shadow-2xl border border-white/20"

                >

                    <div className="flex justify-between">

                        <div>

                            <p className="text-white/70">

                                FishCare AI

                            </p>

                            <h2 className="text-4xl font-bold text-white mt-2">

                                Dashboard Preview

                            </h2>

                        </div>

                        <FaFish

                            className="text-white"

                            size={45}

                        />

                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-10">

                        <div className="bg-white rounded-3xl p-6">

                            <h3 className="text-4xl font-bold text-teal-700">

                                97%

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Prediction Accuracy

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6">

                            <h3 className="text-4xl font-bold text-teal-700">

                                AI

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Machine Learning

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6">

                            <h3 className="text-4xl font-bold text-teal-700">

                                24/7

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Monitoring

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6">

                            <h3 className="text-4xl font-bold text-teal-700">

                                Real Time

                            </h3>

                            <p className="text-gray-500 mt-2">

                                Analytics

                            </p>

                        </div>

                    </div>
                    {/* Feature Cards */}

                    <div className="grid md:grid-cols-3 gap-6 mt-10">

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">

                            <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center">

                                <FaRobot
                                    className="text-teal-700"
                                    size={28}
                                />

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                AI Prediction

                            </h3>

                            <p className="text-gray-500 mt-3 leading-7">

                                Predict fish growth using Machine Learning
                                based on water quality parameters.

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">

                            <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center">

                                <FaWater
                                    className="text-cyan-700"
                                    size={28}
                                />

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Water Monitoring

                            </h3>

                            <p className="text-gray-500 mt-3 leading-7">

                                Monitor Temperature,
                                Dissolved Oxygen,
                                pH and Turbidity in real time.

                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-lg hover:-translate-y-2 transition">

                            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">

                                <FaChartLine
                                    className="text-green-700"
                                    size={28}
                                />

                            </div>

                            <h3 className="text-2xl font-bold mt-5">

                                Dashboard Analytics

                            </h3>

                            <p className="text-gray-500 mt-3 leading-7">

                                Visualize historical analysis,
                                prediction trends,
                                and AI insights.

                            </p>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* CTA */}

            <section className="relative z-10 mt-32 pb-24">

                <motion.div

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                    className="max-w-5xl mx-auto bg-white rounded-[40px] shadow-2xl p-16 text-center"

                >

                    <h2 className="text-5xl font-bold text-gray-800">

                        Ready to Improve

                        <br/>

                        Your Fish Farm?

                    </h2>

                    <p className="text-gray-500 mt-8 text-xl leading-9">

                        Start using FishCare AI today
                        to analyze water quality,
                        predict fish growth,
                        and improve aquaculture productivity.

                    </p>

                    <div className="flex justify-center gap-6 mt-12">

                        <Link

                            to="/register"

                            className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-4 rounded-2xl font-bold transition"

                        >

                            Create Account

                        </Link>

                        <Link

                            to="/login"

                            className="border-2 border-teal-600 text-teal-700 hover:bg-teal-600 hover:text-white px-10 py-4 rounded-2xl font-bold transition"

                        >

                            Login

                        </Link>

                    </div>

                </motion.div>

            </section>

            {/* Footer */}

            <footer className="relative z-10 border-t border-white/20 py-10">

                <div className="text-center text-white">

                    <h3 className="text-2xl font-bold">

                        🐟 FishCare AI

                    </h3>

                    <p className="mt-3 text-cyan-100">

                        Smart Water Quality Monitoring System

                    </p>

                    <p className="mt-6 text-sm text-cyan-200">

                        Powered by React • Laravel • FastAPI • Machine Learning

                    </p>

                    <p className="mt-2 text-sm text-cyan-200">

                        © 2026 FishCare AI. All Rights Reserved.

                    </p>

                </div>

            </footer>

        </div>

    );

}

export default Landing;