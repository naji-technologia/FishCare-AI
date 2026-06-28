import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    FaDatabase,
    FaWeightHanging,
    FaWater,
    FaRobot,
} from "react-icons/fa";

import Card from "../components/common/Card";
import LoadingSkeleton from "../components/common/LoadingSkeleton";

import WeightChart from "../components/charts/WeightChart";
import ClusterChart from "../components/charts/ClusterChart";

import LatestAnalysisTable from "../components/dashboard/LatestAnalysisTable";
import AIRecommendation from "../components/dashboard/AIRecommendation";

import { getDashboard } from "../services/dashboardService";
import { getStatistics } from "../services/statisticsService";

function Dashboard() {

    const [dashboard, setDashboard] = useState(null);

    const [statistics, setStatistics] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const dashboardResponse = await getDashboard();

            const statisticsResponse = await getStatistics();

            setDashboard(dashboardResponse.dashboard);

            setStatistics(statisticsResponse.statistics);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <LoadingSkeleton />;

    }

    return (

        <div className="space-y-8">

            {/* HEADER */}

            <motion.div

                initial={{ opacity: 0, y: -30 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: .5 }}

                className="flex justify-between items-center"

            >

                <div>

                    <h1 className="text-4xl font-bold text-slate-800">

                        Dashboard

                    </h1>

                    <p className="text-slate-500 mt-2">

                        Welcome back 👋

                    </p>

                    <p className="text-slate-400">

                        FishCare AI Smart Monitoring System

                    </p>

                </div>

            </motion.div>

            {/* SUMMARY CARD */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: .2 }}

                className="grid xl:grid-cols-4 md:grid-cols-2 gap-6"

            >

                <Card

                    title="Total Analysis"

                    value={dashboard.total_analysis}

                    icon={<FaDatabase />}

                    color="from-cyan-500 to-blue-600"

                />

                <Card

                    title="Average Weight"

                    value={`${dashboard.average_weight} g`}

                    icon={<FaWeightHanging />}

                    color="from-emerald-500 to-green-600"

                />

                <Card

                    title="Water Quality"

                    value={
                        dashboard.latest_analysis.length
                            ? dashboard.latest_analysis[0].cluster_label
                            : "-"
                    }

                    icon={<FaWater />}

                    color="from-teal-500 to-cyan-600"

                />

                <Card

                    title="AI Status"

                    value="ACTIVE"

                    icon={<FaRobot />}

                    color="from-violet-500 to-purple-600"

                />

            </motion.div>

            {/* CHART SECTION */}

            <div className="grid xl:grid-cols-3 gap-6">

                <div className="xl:col-span-2">

                    {

                        statistics &&

                        <WeightChart

                            data={statistics.weight_trend}

                        />

                    }

                </div>

                <div>

                    {

                        statistics &&

                        <ClusterChart

                            data={statistics.cluster_statistics}

                        />

                    }

                </div>

            </div>
                        {/* BOTTOM SECTION */}

            <div className="grid xl:grid-cols-3 gap-6">

                {/* Latest Analysis */}

                <div className="xl:col-span-2">

                    <LatestAnalysisTable

                        data={dashboard.latest_analysis}

                    />

                </div>

                {/* AI Recommendation */}

                <div>

                    <AIRecommendation

                        latest={
                            dashboard.latest_analysis.length
                                ? dashboard.latest_analysis[0]
                                : null
                        }

                    />

                </div>

            </div>

            {/* FOOTER */}

            <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                transition={{ delay: .5 }}

                className="text-center text-slate-500 py-6"

            >

                <p>

                    FishCare AI © 2026

                </p>

                <p className="text-sm mt-1">

                    Smart Water Quality Monitoring & Fish Growth Prediction using
                    Machine Learning

                </p>

            </motion.div>

        </div>

    );

}

export default Dashboard;