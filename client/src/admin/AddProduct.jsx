import AdminSidebar from "./AdminSidebar";

const AddProduct = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <AdminSidebar />

            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h2 className="text-xl font-bold mb-4">Add Product</h2>

                <form className="bg-white p-4 rounded shadow max-w-lg">
                    <input
                        type="text"
                        placeholder="Product Name"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    <select className="w-full mb-3 p-2 border rounded">
                        <option value="">Select Category</option>
                        <option value="dailywear">Dailywear</option>
                        <option value="stationery">Stationery</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Image URL"
                        className="w-full mb-3 p-2 border rounded"
                    />

                    <button className="bg-black text-white px-4 py-2 rounded">
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
