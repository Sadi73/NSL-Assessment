import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import DatepikerForPurchase from "./DatepikerForPurchase";
import DatePickerforWarranty from "./DatePickerforWarranty";

const Header = () => {

    const updateProductName = (event) => {
        const category = event.target.value;
        console.log(category);

        const product_name = document.getElementById('productName');
        product_name.innerHTML = '';

        if (category === "computer") {
            const option1 = document.createElement("option");
            option1.value = "laptop";
            option1.textContent = "Laptop";
            product_name.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = "desktop";
            option2.textContent = "Desktop";
            product_name.appendChild(option2);

            const option3 = document.createElement("option");
            option3.value = "chromeBook";
            option3.textContent = "Chrome Book";
            product_name.appendChild(option3);
        }

        else if (category === "smartphone") {
            const option1 = document.createElement("option");
            option1.value = "iPhone";
            option1.textContent = "iPhone";
            product_name.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = "samsungGalaxy";
            option2.textContent = "Samsung Galaxy";
            product_name.appendChild(option2);

            const option3 = document.createElement("option");
            option3.value = "googlePixel";
            option3.textContent = "Google Pixel";
            product_name.appendChild(option3);

            const option4 = document.createElement("option");
            option4.value = "onePlus";
            option4.textContent = "One Plus";
            product_name.appendChild(option4);
        }

        else if (category === "audio") {
            const option1 = document.createElement("option");
            option1.value = "headphone";
            option1.textContent = "Headphones";
            product_name.appendChild(option1);

            const option2 = document.createElement("option");
            option2.value = "bluethoothSpeaker";
            option2.textContent = "Bluethooth Speakers";
            product_name.appendChild(option2);

            const option3 = document.createElement("option");
            option3.value = "soundBars";
            option3.textContent = "Sound Bars";
            product_name.appendChild(option3);

            const option4 = document.createElement("option");
            option4.value = "earphones";
            option4.textContent = "Ear Phones";
            product_name.appendChild(option4);
        }

    }

    //--------------------------- Handle warranty checkbok---------------------------------------
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    }
    // ---------------------------Handle warranty checkbok------------------------------------


    // --------------------------handle purchase Date----------------------------------------
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const purchaseDate = `${day}-${month}-${year}`
    const warrantyExpireDate = purchaseDate;
    console.log(purchaseDate)
    // --------------------------handle purchase Date----------------------------------------

    // -------------------------------Handle File Input-----------------------------
    const [file, setFile] = useState('');
    const handleFileInput = (event) => {
        const file = event.target.value;
        console.log(file);
        setFile(file)
    }
    // -------------------------------Handle File Input-----------------------------

    const handleSubmit = (event) => {
        event.preventDefault();
        const categoryName = event.target.category.value;
        const productName = event.target.productName.value;
        const serialNumber = event.target.serialNumber.value;
        const purchasePrice = event.target.purchasePrice.value;
        const warrantyInYears = event.target.warranty ? event.target.warranty.value : 0;

        // console.log(categoryName, productName, serialNumber, purchasePrice, purchaseDate, warrantyInYears, warrantyExpireDate);

        const newItem = {
            categoryName,
            productName,
            serialNumber,
            purchasePrice,
            purchaseDate,
            warrantyInYears,
            warrantyExpireDate,
            file
        }
        console.log(newItem)
    }

    return (
        <div className="px-10">
            {/* The button to open modal */}
            <div className="flex justify-between">
                <label htmlFor="my-modal-5" className="bg-sky-800 p-2.5 text-white rounded-md hover:bg-sky-700">Add Inventory</label>
                <div className="form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search here" className="input input-bordered focus:outline-none" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl px-16">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h1 className="text-3xl font-medium text-center mb-10">Add New Product</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-[200px_1fr]">
                            <label htmlFor="">Categoty <span className="text-red-500">*</span> </label>
                            <select className="border-2 py-2 px-3" id="category" name="category" onChange={updateProductName}>
                                <option value="computer">Computers</option>
                                <option value="smartphone">Smartphones</option>
                                <option value="audio">Audio</option>
                            </select>
                        </div>
                        <br />
                        <div className="grid grid-cols-[200px_1fr]">
                            <label htmlFor="">Product Name <span className="text-red-500">*</span></label>
                            <select className="border-2 py-2 px-3" id="productName" name="productName">
                                <option value="laptop">Laptop</option>
                                <option value="desktop">Desktop</option>
                                <option value="chromebook">Chromebook</option>
                            </select>
                        </div>
                        <br />
                        <div className="grid grid-cols-[200px_1fr]">
                            <label htmlFor="">Serial Number</label>
                            <input className="border-2 py-2 px-3" type="text" name="serialNumber" />
                        </div>
                        <br />
                        <div className="grid grid-cols-[200px_1fr]">
                            <label htmlFor="">Purchase Price <span className="text-red-500">*</span></label>
                            <input className="border-2 py-2 px-3" type="text" name="purchasePrice" />
                        </div>
                        <br />
                        <div className="grid grid-cols-[200px_1fr]">
                            <label htmlFor="">Purchase Date <span className="text-red-500">*</span></label>
                            <DatepikerForPurchase day={day} handleDayChange={handleDayChange} month={month} handleMonthChange={handleMonthChange} year={year} handleYearChange={handleYearChange}></DatepikerForPurchase>

                        </div>
                        <br />

                        {/* warranty section */}
                        <div className="grid grid-cols-[200px_1fr] mb-3">
                            <div></div>
                            <div>
                                <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox} /><label htmlFor="checkbox"> Has Warranty</label>
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
                                            <DatePickerforWarranty></DatePickerforWarranty>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        {/* add image section  */}
                        <div className="grid grid-cols-[200px_1fr] mt-10">
                            <div></div>
                            <div className="relative">
                                <label htmlFor="fileInput" className="border-2 p-5 ">
                                    <FontAwesomeIcon icon={faCamera} className="mr-2 " /> Add Image
                                </label>
                                <input
                                    className="absolute left-0 top-11"
                                    type="file"
                                    id="fileInput"
                                    accept=".jpg, .png"
                                    onChange={handleFileInput}
                                // style={{ display: 'none' }}
                                />
                            </div>
                        </div>

                        {/* cancel and save button */}
                        <div className="mt-10 flex justify-end gap-3">
                            <label htmlFor="my-modal-5" className=" border border-red-700 text-red-700 py-2 px-4">Cancel</label>

                            <input type="submit" value='Save' name="" id="" className="bg-sky-500 text-white px-4 py-2" />
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Header;