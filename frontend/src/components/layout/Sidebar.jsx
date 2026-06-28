import { NavLink } from "react-router-dom";
import {
    FaChartPie,
    FaFlask,
    FaHistory,
    FaEnvelope,
    FaFish,
} from "react-icons/fa";

const user = JSON.parse(localStorage.getItem("user"));

function Sidebar() {

    const menus = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: <FaChartPie />,
        },
        {
            name: "Analyze",
            path: "/analyze",
            icon: <FaFlask />,
        },
        {
            name: "History",
            path: "/history",
            icon: <FaHistory />,
        },
    ];

    return (

        <aside className="w-72 bg-gradient-to-b from-teal-700 via-teal-800 to-slate-900 text-white min-h-screen shadow-2xl flex flex-col">

            {/* ========================= */}
            {/* LOGO */}
            {/* ========================= */}

            <div className="border-b border-white/10 py-8 px-6">

                <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-full bg-white text-teal-700 flex items-center justify-center shadow-lg">

                        <FaFish size={28} />

                    </div>

                    <div>

                        <h1 className="text-2xl font-bold">

                            FishCare AI

                        </h1>

                        <p className="text-sm text-teal-100">

                            Smart Aquaculture Platform

                        </p>

                    </div>

                </div>

            </div>

            {/* ========================= */}
            {/* MENU */}
            {/* ========================= */}

            <nav className="flex-1 mt-8 px-4">

                {

                    menus.map((menu) => (

                        <NavLink

                            key={menu.name}

                            to={menu.path}

                            className={({ isActive }) =>

                                `flex items-center gap-4 px-5 py-4 rounded-2xl mb-3 transition-all duration-300

                                ${

                                    isActive

                                        ? "bg-white text-teal-700 shadow-lg"

                                        : "text-white hover:bg-white/10"

                                }`

                            }

                        >

                            <span className="text-xl">

                                {menu.icon}

                            </span>

                            <span className="font-semibold">

                                {menu.name}

                            </span>

                        </NavLink>

                    ))

                }

            </nav>

            {/* ========================= */}
            {/* USER */}
            {/* ========================= */}

            <div className="border-t border-white/10 p-6">

                <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-white text-teal-700 flex items-center justify-center font-bold text-lg shadow-lg">

                        {

                            user?.name

                                ?

                                user.name.charAt(0).toUpperCase()

                                :

                                "U"

                        }

                    </div>

                    <div className="overflow-hidden">

                        <h3 className="font-semibold truncate">

                            {

                                user?.name ||

                                "Guest"

                            }

                        </h3>

                        <div className="flex items-center gap-2 text-sm text-teal-100">

                            <FaEnvelope size={12} />

                            <span className="truncate">

                                {

                                    user?.email ||

                                    "-"

                                }

                            </span>

                        </div>

                    </div>

                </div>

                <div className="mt-6 text-xs text-teal-200">

                    FishCare AI v1.0

                </div>

            </div>

        </aside>

    );

}

export default Sidebar;