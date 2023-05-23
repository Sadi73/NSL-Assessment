
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';


const Content = () => {
    const [items, setItems] = useState([]);
    const [deleteID, setDeleteID] = useState(null);
    const [editID, setEditID] = useState(null);

    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }



    // get data from api 
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
    // get data from api  

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

        // console.log('successfully deleted', id);
        const updatedItems = items.filter(item => item.id !== id);
        // console.log(updatedItems);
        setItems(updatedItems);
    }

    // handle submit----------------------
    const HandleSubmitOnContent = (event) => {
        event.preventDefault();
        const categoryName = event.target.category.value;
        const productName = event.target.productName.value;
        const serialNumber = event.target.serialNumber.value;
        const purchasePrice = event.target.purchasePrice.value;
        const purchaseDate = event.target.purchaseDate.value;
        const warrantyInYears = event.target.warranty ? event.target.warranty.value : 0;
        const warrantyExpireDate = warrantyInYears == 0 ? purchaseDate : event.target.warrantyExpireDate.value;
        // console.log(categoryName, productName, serialNumber, purchasePrice, purchaseDate, warrantyInYears, warrantyExpireDate);


        // -------------------update data----------------
        var myHeaders = new Headers();
        myHeaders.append("apiKey", "gHnalAf+KT7bKgP5JDR2v9KeUipZhhMAmmzMyNW7bCo=");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": `${editID}`,
            "categoryName": categoryName,
            "productName": productName,
            "serialNumber": serialNumber,
            "purchasePrice": purchasePrice,
            "purchaseDate": purchaseDate,
            "warrantyInYears": warrantyInYears,
            "warrantyExpireDate": warrantyExpireDate
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`http://182.163.101.173:49029/product-crud/products/${editID}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        // -------------------update data----------------
    }
    // handle submit----------------------

    let i = 1;

    return (
        <div className="p-10">
            {
                items.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table w-full text-center font-semi">
                            <thead>
                                <tr className="bg-gray-300">
                                    <th>SL No</th>
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
                                            <td>{i++}</td>
                                            <td>{item.assetNumber}</td>
                                            <td>{item.categoryName}</td>
                                            {/* <td className="flex justify-center"> <img src={item.productPhoto} alt="" className="w-10 h-10" /> </td> */}
                                            <td className="flex justify-center"> <img src={`http://182.163.101.173:49029/product-crud/${item?.productPhoto?.originalPath}`} alt="" className="w-10 h-10" /> </td>
                                            <td>{item.productName}</td>
                                            
                                            <td>{item.serialNumber}</td>
                                            <td>{item.purchasePrice}</td>
                                            <td className="text-center">{item.warrantyInYears}</td>
                                            <td>{item.purchaseDate}</td>
                                            <td>
                                                <button className="mr-3">
                                                    <label htmlFor="my-modal-3" className="" onClick={() => setEditID(item.id)}>
                                                        <FontAwesomeIcon icon={faPenToSquare} className="text-sky-400 hover:text-sky-700" />
                                                    </label>

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
                    </div> :
                    <div className="h-96 flex justify-center items-center">
                        <h1 className="text-red-700 text-3xl font-semibold">Your Have No Items in The Inventory</h1>
                    </div>
            }


            {/* Edit Modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box max-w-3xl relative p-10">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="text-5xl text-center mb-10">Edit This Product </h1>
                    <form onSubmit={HandleSubmitOnContent}>
                        <div className="grid grid-cols-[200px_1fr]">
                            <h1>Category</h1>
                            <select className="border-2 py-2 px-3" id="category" name="category" >
                                <option value="Computers">Computers</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="Audio">Audio</option>
                            </select>
                        </div>
                        <br />

                        <div className="grid grid-cols-[200px_1fr]">
                            <h1>Product Name</h1>
                            <select className="border-2 py-2 px-3" id="productName" name="productName">
                                <option value="laptop">Laptop</option>
                                <option value="desktop">Desktop</option>
                                <option value="chromebook">Chromebook</option>
                                <option value="iPhone">iPhone</option>
                                <option value="Samsung Galaxy">Samsung Galaxy</option>
                                <option value="Google Pixel">Google Pixel</option>
                                <option value="OnePlus">OnePlus</option>
                                <option value="Headphones">Headphones</option>
                                <option value="Bluetooth Speakers">Bluetooth Speakers</option>
                                <option value="Soundbars">Soundbars</option>
                                <option value="Earphones">Earphones</option>
                            </select>
                        </div>
                        <br />

                        <div className="grid grid-cols-[200px_1fr]">
                            <h1>Serial Number</h1>
                            <input className="border-2 py-2 px-3" type="text" name="serialNumber" />
                        </div>
                        <br />

                        <div className="grid grid-cols-[200px_1fr]">
                            <h1>Purchase Price</h1>
                            <input className="border-2 py-2 px-3" type="text" name="purchasePrice" />
                        </div>
                        <br />

                        <div className="grid grid-cols-[200px_1fr]">
                            <h1>Purchase Date</h1>
                            <input className="border-2 py-2 px-3" type="date" name="purchaseDate" />
                        </div>
                        <br />


                        {/* warranty section */}
                        <div className="grid grid-cols-[200px_1fr] mb-3">
                            <div></div>
                            <div>
                                <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox} />
                                <label htmlFor="checkbox"> Has Warranty</label>
                            </div>
                        </div>
                        {
                            isChecked && (
                                <div>
                                    <div>
                                        <div className="grid grid-cols-[200px_1fr]">
                                            <label htmlFor="">Warranty <span className="text-red-500">*</span></label>
                                            <input className="border-2 py-2 px-3" type="text" name="warranty" />
                                        </div>
                                        <br />

                                        <div className="grid grid-cols-[200px_1fr]">
                                            <label htmlFor="">Warranty Expiry Date <span className="text-red-500">*</span></label>
                                            {/* <DatePickerforWarranty></DatePickerforWarranty> */}
                                            <input className="border-2 py-2 px-3" type="date" name="warrantyExpireDate" id="" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {/* cancel and save button */}
                        <div className="mt-10 flex justify-end gap-3">
                            <label htmlFor="my-modal-3" className=" border border-red-700 text-red-700 py-2 px-4">Cancel</label>

                            <input type="submit" value='Save' name="" id="" className="bg-sky-500 text-white px-4 py-2" />
                        </div>
                    </form>
                </div>
            </div>

            {/* Delete Modal */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <div className="flex justify-center mb-10">
                        <FontAwesomeIcon icon={faTrash} className="text-7xl text-red-300" />
                    </div>
                    <h3 className="text-lg font-medium text-center mb-10">Are you sure you want to delete this product?  </h3>
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


{/* The button to open modal */ }


