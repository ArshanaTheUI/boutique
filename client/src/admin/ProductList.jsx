import AdminSidebar from "./AdminSidebar";

const ProductList = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminSidebar />

            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h2 className="text-xl font-bold mb-4">Products</h2>

                <div className="bg-white p-4 rounded shadow">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border-b">
                                <td>T-Shirt</td>
                                <td>₹499</td>
                                <td>Dailywear</td>
                                <td>
                                    <button className="text-red-500">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
