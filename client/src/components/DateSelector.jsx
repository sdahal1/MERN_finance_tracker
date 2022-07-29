import React from 'react';

const DateSelector = (props) => {
    const {setSelectedDate} = props;
    return (
        <div>
            <p>Select a month</p>
            <select className='form-select' defaultValue={""} onChange={(e)=>setSelectedDate(e.target.value)}>
                <option disabled value="">--Please select a month--</option>
                <option value="13">All Months</option>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
            </select>
        </div>
    );
};


export default DateSelector;