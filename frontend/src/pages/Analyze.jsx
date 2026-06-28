import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import ResultCard from "../components/analyze/ResultCard";

import {
    FaRobot,
    FaWater,
    FaTemperatureHigh,
    FaFlask,
    FaWeightHanging,
} from "react-icons/fa";

import { analyzeWater } from "../services/analysisService";

import {
    getHistoryById,
    updateHistory,
} from "../services/historyService";

function Analyze() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        temperature: "",

        dissolved_oxygen: "",

        ph: "",

        turbidity: "",

    });

    const [result, setResult] = useState(null);

    /*
    ============================
    LOAD DATA WHEN EDIT
    ============================
    */

    useEffect(() => {

        if (id) {

            loadHistory();

        }

    }, [id]);

    const loadHistory = async () => {

        try {

            const response = await getHistoryById(id);

            const data = response.data;

            setForm({

                temperature: data.sensor_data.temperature,

                dissolved_oxygen:
                    data.sensor_data.dissolved_oxygen,

                ph: data.sensor_data.ph,

                turbidity:
                    data.sensor_data.turbidity,

            });

            setResult({

                predicted_weight:
                    data.predicted_weight,

                cluster:
                    data.cluster,

                cluster_label:
                    data.cluster_label,

                interpretation:
                    data.interpretation,

            });

        }

        catch (err) {

            console.log(err);

            toast.error("Failed to load history.");

        }

    };

    /*
    ============================
    HANDLE INPUT
    ============================
    */

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };
    /*
    ============================
    HANDLE SUBMIT
    ============================
    */

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            // ============================
            // UPDATE (Analyze Again)
            // ============================

            if (id) {

                const response = await updateHistory(id, {

                    temperature: Number(form.temperature),

                    dissolved_oxygen: Number(form.dissolved_oxygen),

                    ph: Number(form.ph),

                    turbidity: Number(form.turbidity),

                });

                setResult({

                    predicted_weight:
                        response.data.predicted_weight,

                    cluster:
                        response.data.cluster,

                    cluster_label:
                        response.data.cluster_label,

                    interpretation:
                        response.data.interpretation,

                });

                toast.success("Analysis updated successfully.");

                setTimeout(() => {

                    navigate("/history");

                }, 1200);

            }

            // ============================
            // CREATE
            // ============================

            else {

                const response = await analyzeWater({

                    temperature: Number(form.temperature),

                    dissolved_oxygen: Number(form.dissolved_oxygen),

                    ph: Number(form.ph),

                    turbidity: Number(form.turbidity),

                });

                setResult(response.analysis_result);

                toast.success("Analysis Success");

            }

        }

        catch (err) {

            console.log(err);

            toast.error(

                id

                    ? "Failed to update analysis."

                    : "Analysis Failed"

            );

        }

        finally {

            setLoading(false);

        }

    };
    return (

        <div className="space-y-8">

            {/* HEADER */}

            <motion.div

                initial={{ opacity: 0, y: -20 }}

                animate={{ opacity: 1, y: 0 }}

            >

                <h1 className="text-4xl font-bold">

                    {

                        id

                            ? "Analyze Again"

                            : "AI Water Quality Analysis"

                    }

                </h1>

                <p className="text-slate-500 mt-2">

                    {

                        id

                            ? "Update water parameters and generate a new prediction."

                            : "Predict fish weight using Machine Learning."

                    }

                </p>

            </motion.div>

            {/* FORM */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                className="bg-white rounded-3xl shadow-xl p-8"

            >

                <form

                    onSubmit={handleSubmit}

                    className="grid lg:grid-cols-2 gap-6"

                >

                    {/* Temperature */}

                    <div>

                        <label className="font-semibold flex items-center gap-2">

                            <FaTemperatureHigh className="text-red-500" />

                            Temperature (°C)

                        </label>

                        <input

                            type="number"

                            step="0.1"

                            name="temperature"

                            value={form.temperature}

                            onChange={handleChange}

                            className="w-full border rounded-xl p-4 mt-2"

                            required

                        />

                    </div>

                    {/* DO */}

                    <div>

                        <label className="font-semibold flex items-center gap-2">

                            <FaWater className="text-blue-500" />

                            Dissolved Oxygen

                        </label>

                        <input

                            type="number"

                            step="0.1"

                            name="dissolved_oxygen"

                            value={form.dissolved_oxygen}

                            onChange={handleChange}

                            className="w-full border rounded-xl p-4 mt-2"

                            required

                        />

                    </div>

                    {/* PH */}

                    <div>

                        <label className="font-semibold flex items-center gap-2">

                            <FaFlask className="text-purple-500" />

                            pH

                        </label>

                        <input

                            type="number"

                            step="0.1"

                            name="ph"

                            value={form.ph}

                            onChange={handleChange}

                            className="w-full border rounded-xl p-4 mt-2"

                            required

                        />

                    </div>

                    {/* Turbidity */}

                    <div>

                        <label className="font-semibold flex items-center gap-2">

                            <FaWeightHanging className="text-amber-500" />

                            Turbidity

                        </label>

                        <input

                            type="number"

                            step="0.1"

                            name="turbidity"

                            value={form.turbidity}

                            onChange={handleChange}

                            className="w-full border rounded-xl p-4 mt-2"

                            required

                        />

                    </div>

                    <div className="lg:col-span-2">

                        <button

                            disabled={loading}

                            className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-slate-400 text-white rounded-xl py-4 text-lg font-semibold transition"

                        >

                            {

                                loading

                                    ? (

                                        id

                                            ? "Updating Analysis..."

                                            : "Analyzing..."

                                    )

                                    : (

                                        id

                                            ? "Analyze Again"

                                            : "Analyze Now"

                                    )

                            }

                        </button>

                    </div>

                </form>

            </motion.div>

            {/* RESULT */}

            {

                result && (

                    <ResultCard

                        result={result}

                    />

                )

            }

        </div>

    );

}

export default Analyze;