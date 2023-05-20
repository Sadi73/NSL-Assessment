// import React from 'react';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Content = () => {
    const [items, setItems] = useState([]);
    const [deleteID, setDeleteID] = useState(null);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>Asset No.</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Serial No.</th>
                            <th>Price</th>
                            <th>Warranty</th>
                            <th>Purchase Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                                <tr key={item._id} className="border-2 my-10">
                                    <td>{item._id}</td>
                                    <td>{item.categoryName}</td>
                                    <td> <img src={item.productPhoto} alt="" className="w-10 h-10" /> </td>
                                    <td>{item.productName}</td>
                                    <td>{item.serialNumber}</td>
                                    <td>{item.purchasePrice}</td>
                                    <td className="text-center">{item.warrantyInYears}</td>
                                    <td>{item.purchaseDate}</td>
                                    <td>
                                        <button className="mr-5 btn btn-outline btn-primary">
                                            <FontAwesomeIcon icon={faPenToSquare} className="text-sky-500" />
                                        </button>
                                        
                                        <button className="">
                                            <label htmlFor="my-modal-4" className="btn btn-outline btn-error" onClick={() => setDeleteID(item._id)}>
                                                <FontAwesomeIcon icon={faTrash} className=" text-red-500" />
                                            </label>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className="flex justify-center mb-10">
                        <FontAwesomeIcon icon={faTrash} className="text-7xl " />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-10">Are you sure you want to delete this product? {deleteID} </h3>
                    <div className="flex justify-end">
                        <div>
                            <button className="btn btn-outline btn-info mr-5">NO</button>
                            <button className="btn btn-outline btn-error">YES</button>
                        </div>
                    </div>

                </label>
            </label>

        </div>
    );
};

export default Content;