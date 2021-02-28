import React, { useState, useEffect } from 'react'
import Checkbox from '../Common/Components/Form/Checkbox';
import InputField from '../Common/Components/Form/InputField'
import dayjs from 'dayjs'
import DateTimePicker from '../Common/Components/Form/DateTimePicker';
import DatePicker from '../Common/Components/Form/DatePicker';
import TimePicker from '../Common/Components/Form/TimePicker';
const Form = () => {


    const [formData, setFormData] = useState({ startTime: "", date: dayjs(new Date()), name: "", description: "", notification: false, time: dayjs(new Date()) });
    const onChange = (name, value) => {
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        console.log(formData);
    }, [formData])
    return (
        <div>
            <form>
                <div className="p-5">
                    <InputField name="name" id="name" label="name" type="text" value={formData.name} handleChange={onChange} placeholder="Enter Name" />
                    <InputField name="description" id="name" label="Description" type="textarea" value={formData.description} handleChange={onChange} placeholder="Enter Description" />
                    <Checkbox name="notification" id="notification" label="notifications" selected={formData.notification} handleChange={onChange} />
                    <DateTimePicker name="time" id="time" placeholder="Please Select DateTime" handleChange={val => setFormData({ ...formData, time: val })} value={formData.time} />
                    <DatePicker name="date" id="date" placeholder="Please Select Date" handleChange={val => setFormData({ ...formData, date: val })} value={formData.date} />
                    <TimePicker name="startTime" id="startTime" placeholder="Please startTime" handleChange={val => setFormData({ ...formData, startTime: val })} value={formData.startTime} />
                </div>
            </form>
        </div>
    )
}

export default Form
