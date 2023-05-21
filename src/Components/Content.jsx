// import React from 'react';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Content = () => {
    const [items, setItems] = useState([]);
    const [deleteID, setDeleteID] = useState(null);

    // starts here
    var myHeaders = new Headers();
    myHeaders.append("apiKey", "gHnalAf+KT7bKgP5JDR2v9KeUipZhhMAmmzMyNW7bCo=");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("http://182.163.101.173:49029/product-crud/products", requestOptions)
            .then(response => response.json())
            .then(result => setItems(result))
            .catch(error => console.log('error', error));
    }, [])
    // ends here 

    const handleConfirm = (id) => {

        // delete from api
        var myHeaders = new Headers();
        myHeaders.append("apiKey", "gHnalAf+KT7bKgP5JDR2v9KeUipZhhMAmmzMyNW7bCo=");

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`http://182.163.101.173:49029/product-crud/products/${id}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // delete from api

        console.log('successfully deleted', id);
        const updatedItems = items.filter(item => item.id !== id);
        // console.log(updatedItems);
        setItems(updatedItems);
    }

    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="table w-full text-center font-semi">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="static">Asset No.</th>
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
                                <tr key={item.id} className="border-2 my-10">
                                    <td>{item.assetNumber}</td>
                                    <td>{item.categoryName}</td>
                                    <td className="flex justify-center"> <img src={item.productPhoto} alt="" className="w-10 h-10" /> </td>
                                    <td>{item.productName}</td>
                                    <td>{item.serialNumber}</td>
                                    <td>{item.purchasePrice}</td>
                                    <td className="text-center">{item.warrantyInYears}</td>
                                    <td>{item.purchaseDate}</td>
                                    <td>
                                        <button className="mr-3">
                                            <FontAwesomeIcon icon={faPenToSquare} className="text-sky-400 hover:text-sky-700" />
                                        </button>

                                        <button className="">
                                            <label htmlFor="my-modal-4" className="" onClick={() => setDeleteID(item.id)}>
                                                <FontAwesomeIcon icon={faTrash} className=" text-red-400 hover:text-red-700" />
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
                        <FontAwesomeIcon icon={faTrash} className="text-7xl text-red-300" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-10">Are you sure you want to delete this product? {deleteID} </h3>
                    <div className="flex justify-end">
                        <div>
                            <button className="btn btn-outline btn-info mr-5">
                                <label htmlFor="my-modal-4">NO</label>
                            </button>
                            <button className="btn btn-outline btn-error" onClick={() => handleConfirm(deleteID)}>
                                <label htmlFor="my-modal-4">YES</label>
                            </button>
                        </div>
                    </div>

                </label>
            </label>

        </div>
    );
};

export default Content;