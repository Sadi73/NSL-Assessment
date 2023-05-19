// import React from 'react';

import { useEffect, useState } from "react";

const Content = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                    <button className="bg-green-500 px-5 py-3 mr-1">Edit</button>
                                    <button className="bg-red-500 p-3">Delete</button>
                                </td>

                            </tr>
                        ))
                    }
                </table>
            </div>

        </div>
    );
};

export default Content;