import {
    FaRobot,
    FaCheckCircle
} from "react-icons/fa";

import { motion } from "framer-motion";

function AIRecommendation({ latest }) {

    if(!latest){

        return null;

    }

    return (

        <motion.div

            whileHover={{scale:1.02}}

            className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl shadow-xl text-white p-8"

        >

            <div className="flex items-center gap-4 mb-8">

                <FaRobot

                    size={40}

                />

                <div>

                    <h2 className="text-2xl font-bold">

                        AI Recommendation

                    </h2>

                    <p>

                        Based on Machine Learning Analysis

                    </p>

                </div>

            </div>

            <div className="space-y-4">

                <div>

                    <strong>

                        Water Quality

                    </strong>

                    <p>

                        {latest.cluster_label}

                    </p>

                </div>

                <div>

                    <strong>

                        Predicted Weight

                    </strong>

                    <p>

                        {latest.predicted_weight} gram

                    </p>

                </div>

                <div>

                    <strong>

                        Recommendation

                    </strong>

                </div>

                <div className="space-y-3 mt-3">

                    <div className="flex gap-3">

                        <FaCheckCircle/>

                        Maintain dissolved oxygen above 7 mg/L

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle/>

                        Keep pH between 7.0 - 8.0

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle/>

                        Monitor water temperature routinely

                    </div>

                    <div className="flex gap-3">

                        <FaCheckCircle/>

                        Continue periodic water quality monitoring

                    </div>

                </div>

            </div>

        </motion.div>

    );

}

export default AIRecommendation;