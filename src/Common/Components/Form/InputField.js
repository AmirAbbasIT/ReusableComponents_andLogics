import React from 'react'
import PropTypes from 'prop-types'

const InputField = ({ value, label, type, name, id, placeholder, handleChange, error }) => {

    const onChange = e => {
        handleChange(e.target.name, e.target.value);
    }
    return (
        <>
            <div className={`form-group`}>
                <label htmlFor={id} className="form-label">{label}</label>
                {
                    type === 'textarea' ? (
                        <textarea
                            id={id}
                            className='form-control'
                            placeholder={placeholder}
                            name={name}
                            value={value}
                            onChange={onChange}
                        />) : (
                            <input type={type} name={name} id={id} value={value} placeholder={placeholder} className={`form-control ${error ? "is-invalid" : ""}`} onChange={onChange} />
                        )
                }
                {
                    error && <span className="text-danger" >{error}</span>
                }
            </div>
        </>
    )
}


InputField.propTypes = {
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    handleChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
    value: '',
    label: '',
    placeholder: '',
    type: 'text'
};

export default InputField
