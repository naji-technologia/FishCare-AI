import { motion } from "framer-motion";

function LatestAnalysisTable({ data }) {

    return (

        <motion.div

            whileHover={{scale:1.01}}

            className="bg-white rounded-3xl shadow-lg p-8"

        >

            <div className="flex justify-between items-center mb-8">

                <h2 className="text-2xl font-bold">

                    Latest Analysis

                </h2>

                <span className="text-teal-600 font-semibold">

                    {data.length} Data

                </span>

            </div>

            <div className="overflow-x-auto">

                <table className="w-full">

                    <thead>

                        <tr className="border-b">

                            <th className="py-4 text-left">

                                Weight

                            </th>

                            <th className="py-4 text-left">

                                Cluster

                            </th>

                            <th className="py-4 text-left">

                                Temp

                            </th>

                            <th className="py-4 text-left">

                                DO

                            </th>

                            <th className="py-4 text-left">

                                pH

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            data.map((item)=>(

                                <tr

                                    key={item.id}

                                    className="border-b hover:bg-slate-50"

                                >

                                    <td className="py-4">

                                        {item.predicted_weight} gr

                                    </td>

                                    <td>

                                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full">

                                            {item.cluster_label}

                                        </span>

                                    </td>

                                    <td>

                                        {item.sensor_data.temperature}°C

                                    </td>

                                    <td>

                                        {item.sensor_data.dissolved_oxygen}

                                    </td>

                                    <td>

                                        {item.sensor_data.ph}

                                    </td>

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </motion.div>

    );

}

export default LatestAnalysisTable;