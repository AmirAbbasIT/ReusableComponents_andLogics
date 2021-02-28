import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ name, id, label, selected, styleClass, handleChange }) => {

    const onChange = e => {
        handleChange(e.target.name, !selected);
    }
    return (
        <div className={`form-group ${styleClass}`}>
            <input
                id={id}
                name={name}
                type="checkbox"
                className='mr-2'
                checked={selected}
                onChange={onChange} />
            <label className="form-label mx-2" htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

Checkbox.propTypes = {
    styleClass: PropTypes.string,
    selected: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
};

Checkbox.defaultProps = {
    styleClass: '',
    name: ''
};
export default Checkbox
