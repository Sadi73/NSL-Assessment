import { useState } from "react";


const DatePickerforWarranty = (props) => {
    const { warrantyExpireday, handleWarrantyExpireDayChange } = props;
    const { warrantyExpiremonth, handleWarrantyExpireMonthChange } = props;
    const { warrantyExpireyear, handleWarrantyExpireYearChange } = props;

    return (
        <div className='grid grid-cols-3 gap-10'>
            {/* <label htmlFor="day">Day:</label> */}
            <select id="day" value={warrantyExpireday} className='border-2 p-2' onChange={handleWarrantyExpireDayChange}>
                <option value="">Day</option>
                {/* Populate the options for day (1-31) */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            {/* <label htmlFor="month">Month:</label> */}
            <select id="month" value={warrantyExpiremonth} className='border-2' onChange={handleWarrantyExpireMonthChange}>
                <option value="">Month</option>
                {/* Populate the options for month (1-12) */}
                {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            {/* <label htmlFor="year">Year:</label> */}
            <select id="year" value={warrantyExpireyear} className='border-2' onChange={handleWarrantyExpireYearChange}>
                <option value="">Year</option>
                {/* Populate the options for year (e.g., 1900-2100) */}
                {Array.from({ length: 101 }, (_, i) => 1990 + i).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default DatePickerforWarranty;