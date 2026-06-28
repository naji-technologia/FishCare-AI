import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import LoadingSkeleton from "../components/common/LoadingSkeleton";

import HistoryTable from "../components/history/HistoryTable";

import {

    getHistory,

    deleteHistory,

} from "../services/historyService";

function History() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    const [history, setHistory] = useState([]);

    /* ===========================
       FILTER FORM
    =========================== */

    const [searchInput, setSearchInput] = useState("");

    const [clusterInput, setClusterInput] = useState("");

    const [sortInput, setSortInput] = useState("latest");

    /* ===========================
       ACTIVE FILTER
    =========================== */

    const [search, setSearch] = useState("");

    const [cluster, setCluster] = useState("");

    const [sort, setSort] = useState("latest");

    useEffect(() => {

        loadHistory();

    }, [search, cluster, sort]);

    /* ===========================
       LOAD HISTORY
    =========================== */

    const loadHistory = async () => {

        setLoading(true);

        try {

            const response = await getHistory({

                search,

                cluster,

                sort,

            });

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

    /* ===========================
       SEARCH
    =========================== */

    const handleSearch = (e) => {

        e.preventDefault();

        setSearch(searchInput);

        setCluster(clusterInput);

        setSort(sortInput);

    };

    /* ===========================
       RESET
    =========================== */

    const handleReset = () => {

        setSearchInput("");

        setClusterInput("");

        setSortInput("latest");

        setSearch("");

        setCluster("");

        setSort("latest");

    };

    /* ===========================
       DELETE
    =========================== */

    const handleDelete = async (id) => {

        if (!window.confirm("Delete this analysis?")) {

            return;

        }

        try {

            await deleteHistory(id);

            toast.success("History deleted.");

            loadHistory();

        }

        catch {

            toast.error("Delete failed.");

        }

    };

    /* ===========================
       VIEW
    =========================== */

    const handleView = (id) => {

        navigate(`/history/${id}`);

    };

    /* ===========================
       EDIT
    =========================== */

    const handleEdit = (id) => {

        navigate(`/analyze/${id}`);

    };

    if (loading) {

        return <LoadingSkeleton />;

    }

    return (

        <div className="space-y-8">

            {/* HEADER */}

            <motion.div

                initial={{ opacity: 0, y: -20 }}

                animate={{ opacity: 1, y: 0 }}

            >

                <h1 className="text-4xl font-bold">

                    Analysis History

                </h1>

                <p className="text-slate-500 mt-2">

                    Search, filter, edit and manage your AI analysis history.

                </p>

            </motion.div>

            {/* FILTER */}

            <div className="bg-white rounded-3xl shadow-lg p-6">

                <form

                    onSubmit={handleSearch}

                    className="grid lg:grid-cols-5 gap-4"

                >

                    <input

                        type="text"

                        placeholder="Search..."

                        value={searchInput}

                        onChange={(e) => setSearchInput(e.target.value)}

                        className="border rounded-xl px-5 py-3"

                    />

                    <select

                        value={clusterInput}

                        onChange={(e) => setClusterInput(e.target.value)}

                        className="border rounded-xl px-5 py-3"

                    >

                        <option value="">

                            All Cluster

                        </option>

                        <option value="0">

                            Sangat Baik

                        </option>

                        <option value="1">

                            Baik

                        </option>

                        <option value="2">

                            Buruk

                        </option>

                    </select>

                    <select

                        value={sortInput}

                        onChange={(e) => setSortInput(e.target.value)}

                        className="border rounded-xl px-5 py-3"

                    >

                        <option value="latest">

                            Latest

                        </option>

                        <option value="oldest">

                            Oldest

                        </option>

                        <option value="weight_desc">

                            Highest Weight

                        </option>

                        <option value="weight_asc">

                            Lowest Weight

                        </option>

                    </select>

                    <button

                        type="submit"

                        className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl"

                    >

                        Search

                    </button>

                    <button

                        type="button"

                        onClick={handleReset}

                        className="bg-slate-600 hover:bg-slate-700 text-white rounded-xl"

                    >

                        Reset

                    </button>

                </form>

            </div>
            {/* SUMMARY */}

            <div className="grid lg:grid-cols-4 gap-6">

                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <p className="text-slate-500">

                        Total Analysis

                    </p>

                    <h2 className="text-4xl font-bold mt-3 text-slate-800">

                        {history.length}

                    </h2>

                </div>

                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-3xl shadow-lg p-6">

                    <p>

                        Sangat Baik

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {

                            history.filter(

                                item => item.cluster === 0

                            ).length

                        }

                    </h2>

                </div>

                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white rounded-3xl shadow-lg p-6">

                    <p>

                        Baik

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {

                            history.filter(

                                item => item.cluster === 1

                            ).length

                        }

                    </h2>

                </div>

                <div className="bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-3xl shadow-lg p-6">

                    <p>

                        Buruk

                    </p>

                    <h2 className="text-4xl font-bold mt-3">

                        {

                            history.filter(

                                item => item.cluster === 2

                            ).length

                        }

                    </h2>

                </div>

            </div>

            {/* TABLE HEADER */}

            <div className="flex justify-between items-center">

                <div>

                    <h2 className="text-2xl font-bold">

                        History List

                    </h2>

                    <p className="text-slate-500">

                        Showing {history.length} analysis result(s)

                    </p>

                </div>

            </div>

            {/* HISTORY TABLE */}

            <HistoryTable

                history={history}

                onView={handleView}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />

        </div>

    );

}

export default History;