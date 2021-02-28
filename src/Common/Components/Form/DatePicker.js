import React from 'react'
import dayjs from 'dayjs'
import Flatpickr from "react-flatpickr"
import '../../../../node_modules/flatpickr/dist/flatpickr.min.css'

const DatePicker = ({ name, id, value, handleChange, onFocus, onClose, error, format = "YYYY/MM/DD", placeholder, label, }) => {
    const onChnage = date => {
        date && date[0] && handleChange(dayjs(date[0]).format(format))
    }

    const Config = {
        minDate: "today",
        //static: true,
        dateFormat: "Y/m/d",
    };

    return (
        <div className="form-group">
            <label className="form-label" htmlFor={id}>{label}</label>
            <Flatpickr
                name={name}
                value={value}
                onClose={onClose}
                onFocus={onFocus}
                onChange={onChnage}
                placeholder={placeholder}
                options={Config}
                className={"form-control bg-white " + (error ? "is-invalid" : " ")}
            />
            {error &&
                <div className="invalid-feedback d-block">
                    {error}
                </div>
            }
        </div>
    )
}

export default DatePicker
