import React from 'react'
import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import Flatpickr from "react-flatpickr"
import '../../../../node_modules/flatpickr/dist/flatpickr.min.css'

const TimePicker = ({ name, id, value, handleChange, onFocus, onClose, error, format = "HH:mm", placeholder, label, enable24Hours }) => {
    const onChnage = time => {
        time && time[0] && handleChange(dayjs(time[0]).format(format))
    }

    const timeConfig = {
        enableTime: true,
        minuteIncrement: 1,
        noCalendar: true,
        //static: true,
        dateFormat: "h:i K",
        time_24hr: enable24Hours && enable24Hours
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
                data-enable-time={true}
                options={timeConfig}
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
// TimePicker.propTypes = {
//     label: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     handleChange: PropTypes.func.isRequired
// }
export default TimePicker
