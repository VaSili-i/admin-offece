import React from 'react';
import PersonalData from '../components/PersonalData';
import News from '../components/News'
import ManagedList from '../components/ManagedList';
import ManagedUsers from '../components/ManagedUsers';
import StaffingStructure from '../components/StaffingStructure';
import '../style/PrivareOffeceStyle.css'

const PrivateOffece = function () {
    return (
        <div className='offece'>
            <div className="blue-line"></div>
            <h1> Личный каинет системного администратора</h1>
            <div className="content">
                <PersonalData />
                <News />
                <ManagedList />
                <ManagedUsers />
                <StaffingStructure />
            </div>
        </div>
    )
}

export default PrivateOffece