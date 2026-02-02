import { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import {
    getProductsApi,
    deleteProductApi,
    updateProductApi,
} from "../../services/productService";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [editProduct, setEditProduct] = useState(null);

    useEffect(() => {
        getProductsApi().then((data) => {
            console.log("PRODUCTS FROM API 👉", data);
            setProducts(data);
        });
    }, []);

    // DELETE (with confirmation)
    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete?");
        if (!confirm) return;

        await deleteProductApi(id);
        setProducts(products.filter((p) => p._id !== id));
    };

    // SAVE EDIT
    const handleUpdate = async () => {
        const updated = await updateProductApi(editProduct._id, editProduct);

        setProducts(
            products.map((p) =>
                p._id === updated._id ? updated : p
            )
        );

        setEditProduct(null);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <AdminSidebar />

            <div className="flex-1 p-6 bg-gray-100 min-h-screen">
                <h2 className="text-xl font-bold mb-4">Products</h2>

                <div className="bg-white p-4 rounded shadow overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((p) => (
                                <tr key={p._id} className="border-b">
                                    <td>{p.name}</td>
                                    <td>₹{p.price}</td>
                                    <td>{p.category}</td>
                                    <td className="flex gap-3">
                                        <button
                                            onClick={() => setEditProduct(p)}
                                            className="text-blue-600"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => handleDelete(p._id)}
                                            className="text-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {products.length === 0 && (
                        <p className="text-center text-gray-500 mt-4">
                            No products found
                        </p>
                    )}
                </div>
            </div>

            {/* EDIT MODAL */}
            {editProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white p-5 rounded w-80">
                        <h3 className="font-bold mb-3">Edit Product</h3>

                        <input
                            className="w-full mb-2 p-2 border"
                            value={editProduct.name}
                            onChange={(e) =>
                                setEditProduct({
                                    ...editProduct,
                                    name: e.target.value,
                                })
                            }
                        />

                        <input
                            type="number"
                            className="w-full mb-2 p-2 border"
                            value={editProduct.price}
                            onChange={(e) =>
                                setEditProduct({
                                    ...editProduct,
                                    price: e.target.value,
                                })
                            }
                        />

                        <select
                            className="w-full mb-3 p-2 border"
                            value={editProduct.category}
                            onChange={(e) =>
                                setEditProduct({
                                    ...editProduct,
                                    category: e.target.value,
                                })
                            }
                        >
                            <option value="dailywear">Dailywear</option>
                            <option value="stationery">Stationery</option>
                        </select>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={handleUpdate}
                                className="bg-black text-white px-4 py-1 rounded"
                            >
                                Save
                            </button>

                            <button
                                onClick={() => setEditProduct(null)}
                                className="text-gray-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
