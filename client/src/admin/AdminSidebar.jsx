import { Link } from "react-router-dom";

const AdminSidebar = () => {
    return (
        <div className="w-full md:w-64 bg-black text-white min-h-screen p-4">
            <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

            <nav className="flex flex-col gap-3">
                <Link to="/admin" className="hover:text-gray-300">
                    Dashboard
                </Link>

                <Link to="/admin/add-product" className="hover:text-gray-300">
                    Add Product
                </Link>

                <Link to="/admin/products" className="hover:text-gray-300">
                    Products
                </Link>
            </nav>
        </div>
    );
};

export default AdminSidebar;
