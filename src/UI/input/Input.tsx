import React, { FC } from 'react';
import './InputStyle.css'

interface IInputProps {
    attributes: {
        placeholder: string,
    }
    value: string,
    change: (value: string) => void,
}
const Input: FC<IInputProps> = function ({ attributes, value, change }) {

    return (
        <input {...attributes} value={value}
            onChange={(e) => { change(e.target.value) }}
            className="input">
        </input>
    )
}
export default Input