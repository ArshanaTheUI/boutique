import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminSidebar />

            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-bold mb-6">
                    Welcome Admin 👋
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Total Products</h3>
                        <p className="text-2xl">0</p>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Categories</h3>
                        <p className="text-2xl">2</p>
                    </div>

                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Orders</h3>
                        <p className="text-2xl">0</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
