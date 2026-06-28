import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import {

    FaArrowLeft,

    FaEdit,

    FaTemperatureHigh,

    FaWater,

    FaFlask,

    FaWeightHanging,

    FaFish,

} from "react-icons/fa";

import LoadingSkeleton from "../components/common/LoadingSkeleton";

import {

    getHistoryById,

} from "../services/historyService";

function HistoryDetail() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [history, setHistory] = useState(null);

    useEffect(() => {

        loadHistory();

    }, []);

    const loadHistory = async () => {

        try {

            const response = await getHistoryById(id);

            setHistory(response.data);

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load history.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <LoadingSkeleton />;

    }

    if (!history) {

        return (

            <div className="text-center py-20">

                History Not Found

            </div>

        );

    }

    return (

        <div className="space-y-8">

            {/* HEADER */}

            <motion.div

                initial={{ opacity: 0, y: -20 }}

                animate={{ opacity: 1, y: 0 }}

                className="flex justify-between items-center"

            >

                <div>

                    <h1 className="text-4xl font-bold">

                        Analysis Detail

                    </h1>

                    <p className="text-slate-500 mt-2">

                        View complete analysis information.

                    </p>

                </div>

                <div className="flex gap-3">

                    <button

                        onClick={() => navigate("/history")}

                        className="px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300"

                    >

                        <FaArrowLeft />

                    </button>

                    <button

                        onClick={() => navigate(`/analyze/${history.id}`)}

                        className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2"

                    >

                        <FaEdit />

                        Analyze Again

                    </button>

                </div>

            </motion.div>
            {/* SENSOR DATA */}

            <div className="grid lg:grid-cols-2 gap-6">

                <motion.div

                    initial={{ opacity: 0, x: -20 }}

                    animate={{ opacity: 1, x: 0 }}

                    className="bg-white rounded-3xl shadow-xl p-8"

                >

                    <h2 className="text-2xl font-bold mb-8">

                        Sensor Information

                    </h2>

                    <div className="space-y-6">

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-3">

                                <FaTemperatureHigh className="text-red-500 text-xl" />

                                <span>Temperature</span>

                            </div>

                            <span className="font-bold">

                                {history.sensor_data.temperature} °C

                            </span>

                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-3">

                                <FaWater className="text-blue-500 text-xl" />

                                <span>Dissolved Oxygen</span>

                            </div>

                            <span className="font-bold">

                                {history.sensor_data.dissolved_oxygen} mg/L

                            </span>

                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-3">

                                <FaFlask className="text-purple-500 text-xl" />

                                <span>pH</span>

                            </div>

                            <span className="font-bold">

                                {history.sensor_data.ph}

                            </span>

                        </div>

                        <div className="flex justify-between items-center">

                            <div className="flex items-center gap-3">

                                <FaWeightHanging className="text-amber-500 text-xl" />

                                <span>Turbidity</span>

                            </div>

                            <span className="font-bold">

                                {history.sensor_data.turbidity} NTU

                            </span>

                        </div>

                    </div>

                </motion.div>

                {/* RESULT */}

                <motion.div

                    initial={{ opacity: 0, x: 20 }}

                    animate={{ opacity: 1, x: 0 }}

                    className="bg-white rounded-3xl shadow-xl p-8"

                >

                    <h2 className="text-2xl font-bold mb-8">

                        Prediction Result

                    </h2>

                    <div className="space-y-7">

                        <div className="bg-teal-50 rounded-2xl p-6">

                            <p className="text-slate-500">

                                Predicted Fish Weight

                            </p>

                            <h2 className="text-5xl font-bold text-teal-700 mt-2">

                                {history.predicted_weight} g

                            </h2>

                        </div>

                        <div>

                            <p className="text-slate-500 mb-2">

                                Cluster

                            </p>

                            <span

                                className={`px-5 py-2 rounded-full font-semibold

                                ${history.cluster === 0

                                    ? "bg-green-100 text-green-700"

                                    : history.cluster === 1

                                        ? "bg-yellow-100 text-yellow-700"

                                        : "bg-red-100 text-red-700"

                                }

                                `}

                            >

                                {history.cluster_label}

                            </span>

                        </div>

                        <div>

                            <p className="text-slate-500 mb-2">

                                Interpretation

                            </p>

                            <div className="bg-slate-100 rounded-xl p-5">

                                {history.interpretation}

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>

            {/* FOOTER */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 text-white"

            >

                <div className="flex items-center gap-4">

                    <FaFish className="text-5xl" />

                    <div>

                        <h2 className="text-2xl font-bold">

                            FishCare AI

                        </h2>

                        <p className="text-teal-100 mt-2">

                            This analysis was generated using Random Forest Regression

                            and K-Means Clustering integrated through FastAPI.

                        </p>

                    </div>

                </div>

            </motion.div>

        </div>

    );

}

export default HistoryDetail;