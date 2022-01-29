import React, { FC, useState } from 'react'
import './style/ModalAddUserStyle.css';
import Input from '../UI/input/Input';
import { useActions } from '../hooks/useActions';

interface IModalAddUserProps {
    hide: boolean,
    setHide: (hide: boolean) => void,
    id: number
}

const ModalAddUser: FC<IModalAddUserProps> = function ({ hide, setHide, id }) {
    let newId = ++id;
    let [fullName, setFullName] = useState('');
    let [mail, setMail] = useState('');
    let [department, setDepartment] = useState('');
    let [post, setPost] = useState('');
    let [phone, setPhone] = useState('');
    let [password, setPassword] = useState('');
    let { addUser } = useActions()
    if (hide) {
        return null
    }

    function addUserFunction() {
        addUser({ name: fullName, department, phone, mail, id: newId, password })
        setHide(true)
    }
    return (
        <div className='window-madal'>
            <div className="form">
                <h2 className="add-user-h">Добавить администратора РОУ</h2>
                <Input attributes={{ placeholder: 'ФИО' }}
                    value={fullName} change={setFullName} />
                <Input attributes={{ placeholder: 'Почта' }}
                    value={mail} change={setMail} />
                <Input attributes={{ placeholder: 'Департамент' }}
                    value={department} change={setDepartment} />
                <Input attributes={{ placeholder: 'Должность' }}
                    value={post} change={setPost} />
                <Input attributes={{ placeholder: 'Телефон' }}
                    value={phone} change={setPhone} />
                <Input attributes={{ placeholder: 'Пороль' }}
                    value={password} change={setPassword} />
                <div>
                    <button className="save-user"
                        onClick={addUserFunction}
                    >Сохранить</button>
                </div>
            </div>

        </div >
    )
}

export default ModalAddUser


