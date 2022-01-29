import React, { useEffect, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Select from '../UI/select/select';

const StaffingStructure = function () {
    const { fetchInformationDepar, fetchManagementDepar } = useActions();
    const { usersManagment, usersInformation } = useTypedSelector(state => state.staffing);
    const usersStaffing = usersManagment.concat(usersInformation);
    useEffect(() => {
        fetchInformationDepar();
        fetchManagementDepar();
    }, [])

    const [isManagment, setIsManagment] = useState(false);
    const departments = [usersInformation[0].department, usersManagment[0].department];
    const names = usersStaffing.map(users => users.name);

    const namesManagment = usersManagment.map(users => users.name);
    const namesInformation = usersInformation.map(users => users.name);
    const post = usersManagment.map(users => users.post);
    const [selectedPost, setSelectedPost] = useState('');
    const [isManagmentUser, setIsManagmentUser] = useState(false);

    function getName(params: string, isManagment: boolean) {
        if (!params) {
            return names
        }
        let userName = [];
        if (isManagment) {
            userName = usersManagment.filter(users => users.post === params)
        } else {
            userName = usersInformation.filter(users => users.post === params)
        }
        return userName.map(user => user.name)
    }

    function changeDepartment(depar: string) {
        setIsManagment(depar == "Департамент управления")
    }

    function changeDepartmentUser(depar: string) {
        setIsManagmentUser(depar == "Департамент управления")
    }

    function changeDepartmentUsers() {
        return isManagmentUser ?
            namesManagment : namesInformation
    }
    return (
        <div>
            <h4>Организационно-штатная структура</h4>
            <div>
                {changeDepartmentUsers().map((name, index) =>
                    <div className={index !== 0 ? index == 2 || index == 3 ?
                        'margin-left-300' : 'margin-left-235' : ''}>
                        <span>1.{index + 1}</span>

                        {!index ? <Select options={departments}
                            changes={changeDepartmentUser} /> : null}

                        <Select options={[post[index]]}
                            changes={() => { }} />
                        <Select options={[name]} changes={() => { }} />
                    </div>
                )}
            </div>
            <div>
                <span>2</span>
                <Select options={departments} changes={changeDepartment} />
                <Select options={post} changes={setSelectedPost} />
                <Select options={getName(selectedPost, isManagment)} changes={() => { }} />
            </div>
        </div>
    )
}

export default StaffingStructure