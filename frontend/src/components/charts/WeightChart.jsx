import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

function WeightChart({ data }) {

    return (

        <div className="bg-white rounded-3xl shadow-lg p-8">

            <div className="flex justify-between items-center mb-6">

                <div>

                    <h2 className="text-2xl font-bold text-slate-700">

                        Fish Weight Trend

                    </h2>

                    <p className="text-slate-500">

                        Predicted fish weight over time

                    </p>

                </div>

            </div>

            <ResponsiveContainer
                width="100%"
                height={320}
            >

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="4 4" />

                    <XAxis
                        dataKey="date"
                    />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="predicted_weight"
                        stroke="#14B8A6"
                        strokeWidth={4}
                        dot={{
                            r:6
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default WeightChart;