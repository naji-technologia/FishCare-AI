import { motion } from "framer-motion";
import {
    FaRobot,
    FaWeightHanging,
    FaCheckCircle
} from "react-icons/fa";

function ResultCard({ result }) {

    if (!result) return null;

    const badgeColor = () => {

        switch (result.cluster) {

            case 0:

                return "bg-green-500";

            case 1:

                return "bg-yellow-500";

            default:

                return "bg-red-500";

        }

    };

    return (

        <motion.div

            initial={{
                opacity:0,
                y:40
            }}

            animate={{
                opacity:1,
                y:0
            }}

            className="bg-white rounded-3xl shadow-xl p-8"

        >

            <div className="flex items-center gap-4">

                <FaRobot

                    size={42}

                    className="text-teal-600"

                />

                <div>

                    <h2 className="text-3xl font-bold">

                        AI Prediction

                    </h2>

                    <p className="text-slate-500">

                        FishCare Machine Learning

                    </p>

                </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">

                <div>

                    <p className="text-slate-500">

                        Predicted Weight

                    </p>

                    <h1 className="text-5xl font-bold text-teal-700 mt-3">

                        {result.predicted_weight}

                    </h1>

                    <p className="mt-2">

                        gram

                    </p>

                </div>

                <div>

                    <span

                        className={`${badgeColor()} text-white px-5 py-2 rounded-full font-semibold`}

                    >

                        {result.cluster_label}

                    </span>

                </div>

            </div>

            <div className="mt-8">

                <h3 className="text-xl font-bold">

                    Interpretation

                </h3>

                <p className="mt-3 leading-8">

                    {result.interpretation}

                </p>

            </div>

            <div className="mt-8">

                <h3 className="text-xl font-bold mb-4">

                    AI Recommendation

                </h3>

                <div className="space-y-3">

                    <div className="flex gap-3">

                        <FaCheckCircle className="text-green-600"/>

                        Maintain water quality routinely

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle className="text-green-600"/>

                        Maintain dissolved oxygen above 7 mg/L

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle className="text-green-600"/>

                        Maintain pH between 7-8

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle className="text-green-600"/>

                        Monitor temperature every day

                    </div>

                </div>

            </div>

        </motion.div>

    );

}

export default ResultCard;