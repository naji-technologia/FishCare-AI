import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

const COLORS = [
    "#14B8A6",
    "#3B82F6",
    "#F59E0B",
    "#EF4444"
];

function ClusterChart({ data }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-slate-700 mb-6">

                Cluster Distribution

            </h2>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="total"

                        nameKey="cluster_label"

                        outerRadius={100}

                        label

                    >

                        {

                            data.map((entry,index)=>(

                                <Cell

                                    key={index}

                                    fill={COLORS[index % COLORS.length]}

                                />

                            ))

                        }

                    </Pie>

                    <Tooltip/>

                    <Legend/>

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default ClusterChart;