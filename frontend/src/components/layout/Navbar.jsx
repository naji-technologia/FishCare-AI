function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/";

    };

    return (

        <header className="bg-white shadow flex justify-between items-center px-8 py-5">

            <div>

                <h2 className="text-2xl font-bold text-slate-700">

                    FishCare AI Dashboard

                </h2>

                <p className="text-gray-500">

                    Smart Fish Monitoring System

                </p>

            </div>

            <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
            >

                Logout

            </button>

        </header>

    );

}

export default Navbar;