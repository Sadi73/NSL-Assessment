import { useState } from "react";


const DatepikerForPurchase = (props) => {
    const {day, handleDayChange} = props;
    const {month, handleMonthChange} = props;
    const {year, handleYearChange} = props;

    return (
        <div className='grid grid-cols-3 gap-10'>
            {/* <label htmlFor="day">Day:</label> */}
            <select id="day" value={day} className='border-2 p-2' onChange={handleDayChange}>
                <option value="">Day</option>
                {/* Populate the options for day (1-31) */}
                {Array.from({ length: 31 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            {/* <label htmlFor="month">Month:</label> */}
            <select id="month" value={month} className='border-2' onChange={handleMonthChange}>
                <option value="">Month</option>
                {/* Populate the options for month (1-12) */}
                {Array.from({ length: 12 }, (_, i) => i + 1).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>

            {/* <label htmlFor="year">Year:</label> */}
            <select id="year" value={year} className='border-2' onChange={handleYearChange}>
                <option value="">Year</option>
                {/* Populate the options for year (e.g., 1900-2100) */}
                {Array.from({ length: 100 }, (_, i) => 1990 + i).map((value) => (
                    <option key={value} value={value}>{value}</option>
                ))}
            </select>
        </div>
    );
};

export default DatepikerForPurchase;