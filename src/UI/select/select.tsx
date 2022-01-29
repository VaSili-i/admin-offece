import React, { FC } from 'react';
import './SelectStyle.css'

interface ISelectProps {
    options: string[],
    changes: (depart: string) => any
}

const Select: FC<ISelectProps> = function ({ options, changes }) {

    return (
        <select className="select"
            onChange={(e) => changes(e.target.value)}>
            {options.map(option =>
                <option>{option}</option>
            )}
        </select>
    )
}

export default Select