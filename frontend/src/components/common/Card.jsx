import { motion } from "framer-motion";

function Card({
    title,
    value,
    icon,
    color,
}) {
    return (
        <motion.div
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
            className={`bg-gradient-to-r ${color} rounded-3xl shadow-xl p-6 text-white`}
        >
            <div className="flex justify-between items-start">

                <div>

                    <p className="text-white/80 text-sm">

                        {title}

                    </p>

                    <h2 className="text-4xl font-bold mt-4">

                        {value}

                    </h2>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">

                    {icon}

                </div>

            </div>

            <div className="mt-8 flex justify-between items-center">

                <span className="text-sm">

                    FishCare AI

                </span>

                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">

                    Live

                </span>

            </div>

        </motion.div>
    );
}

export default Card;