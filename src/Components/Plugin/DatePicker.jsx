import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerPlugin = (props) => {
  return (
    <div className={"plugin-date-picker"}>
        <DatePicker 
            inline
            monthsShown={2}
        />
    </div>
  )
}

export default DatePickerPlugin