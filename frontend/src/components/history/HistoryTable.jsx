import { motion } from "framer-motion";

import {
    FaEye,
    FaEdit,
    FaTrash,
    FaFish,
    FaTemperatureHigh,
    FaWater,
} from "react-icons/fa";

import { GiWaterDrop } from "react-icons/gi";

function HistoryTable({

    history = [],

    onView,

    onEdit,

    onDelete,

}) {

    const badgeColor = (cluster) => {

        switch (cluster) {

            case 0:

                return "bg-emerald-100 text-emerald-700 border border-emerald-200";

            case 1:

                return "bg-amber-100 text-amber-700 border border-amber-200";

            default:

                return "bg-red-100 text-red-700 border border-red-200";

        }

    };

    return (

        <motion.div

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: .4 }}

            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"

        >

            {/* HEADER */}

            <div className="flex justify-between items-center px-8 py-6 border-b bg-gradient-to-r from-teal-600 to-cyan-600">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Analysis History

                    </h2>

                    <p className="text-teal-100 mt-1">

                        Manage all fish prediction records.

                    </p>

                </div>

                <div className="bg-white/20 rounded-2xl px-5 py-3">

                    <h3 className="text-3xl font-bold text-white">

                        {history.length}

                    </h3>

                    <p className="text-xs text-teal-100">

                        Records

                    </p>

                </div>

            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

                <table className="min-w-full">

                    <thead className="bg-slate-100">

                        <tr className="text-slate-700">

                            <th className="px-6 py-4 text-left">

                                Weight

                            </th>

                            <th className="px-6 py-4 text-left">

                                Cluster

                            </th>

                            <th className="px-6 py-4 text-left">

                                Temperature

                            </th>

                            <th className="px-6 py-4 text-left">

                                DO

                            </th>

                            <th className="px-6 py-4 text-left">

                                pH

                            </th>

                            <th className="px-6 py-4 text-left">

                                Turbidity

                            </th>

                            <th className="px-6 py-4 text-center">

                                Action

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            history.length === 0 && (

                                <tr>

                                    <td

                                        colSpan={7}

                                        className="py-20 text-center"

                                    >

                                        <FaFish

                                            size={55}

                                            className="mx-auto text-slate-300"

                                        />

                                        <h2 className="mt-5 text-xl font-semibold text-slate-600">

                                            No Analysis Found

                                        </h2>

                                        <p className="text-slate-400 mt-2">

                                            Analyze water quality first.

                                        </p>

                                    </td>

                                </tr>

                            )

                        }

                        {

                            history.map((item) => (

                                <tr

                                    key={item.id}

                                    className="border-b hover:bg-slate-50 transition-all"

                                >

                                    <td className="px-6 py-5 font-bold text-slate-700">

                                        {item.predicted_weight} g

                                    </td>

                                    <td className="px-6">

                                        <span

                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${badgeColor(item.cluster)}`}

                                        >

                                            {item.cluster_label}

                                        </span>

                                    </td>

                                    <td className="px-6">

                                        <div className="flex items-center gap-2">

                                            <FaTemperatureHigh className="text-red-500"/>

                                            {item.sensor_data.temperature}°C

                                        </div>

                                    </td>

                                    <td className="px-6">

                                        <div className="flex items-center gap-2">

                                            <FaWater className="text-blue-500"/>

                                            {item.sensor_data.dissolved_oxygen}

                                        </div>

                                    </td>

                                    <td className="px-6">

                                        {item.sensor_data.ph}

                                    </td>

                                    <td className="px-6">

                                        <div className="flex items-center gap-2">

                                            <GiWaterDrop className="text-cyan-500"/>

                                            {item.sensor_data.turbidity}

                                        </div>

                                    </td>
                                    <td className="px-6">

                                        <div className="flex justify-center gap-3">

                                            {/* VIEW */}

                                            <button

                                                onClick={() => onView(item.id)}

                                                title="View Detail"

                                                className="w-11 h-11 rounded-xl bg-blue-500 hover:bg-blue-600 text-white transition-all hover:scale-110 shadow-md"

                                            >

                                                <FaEye className="mx-auto" />

                                            </button>

                                            {/* EDIT */}

                                            <button

                                                onClick={() => onEdit(item.id)}

                                                title="Analyze Again"

                                                className="w-11 h-11 rounded-xl bg-amber-500 hover:bg-amber-600 text-white transition-all hover:scale-110 shadow-md"

                                            >

                                                <FaEdit className="mx-auto" />

                                            </button>

                                            {/* DELETE */}

                                            <button

                                                onClick={() => onDelete(item.id)}

                                                title="Delete"

                                                className="w-11 h-11 rounded-xl bg-red-500 hover:bg-red-600 text-white transition-all hover:scale-110 shadow-md"

                                            >

                                                <FaTrash className="mx-auto" />

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

            {/* FOOTER */}

            <div className="border-t bg-slate-50 px-8 py-4 flex justify-between items-center">

                <div className="text-sm text-slate-500">

                    Total Analysis :

                    <span className="ml-2 font-bold text-slate-700">

                        {history.length}

                    </span>

                </div>

                <div className="text-sm text-slate-400">

                    FishCare AI • Analysis History

                </div>

            </div>

        </motion.div>

    );

}

export default HistoryTable;