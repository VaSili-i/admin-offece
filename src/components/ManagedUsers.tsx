import React, { FC, useState, useEffect } from 'react';
import '../style/ManagedUsersStyle.css';
import ModalAddUser from '../modals/ModalAddUser';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useSearch } from '../hooks/useSearch';
import { IUsers } from '../types/types';
import { useActions } from '../hooks/useActions';

const ManagedUsers: FC = function () {

    const { users, isFetch } = useTypedSelector(state => state.user);
    const { deleteUser } = useActions()
    const [search, setSearch] = useState('');
    const [hide, setHide] = useState(true);
    let searchBar = ['Администраторы РОУ', 'Управление ФОИВ', 'Управление РОУ'];
    let [navClass, setNavClass] = useState(0);
    let searchedUser: IUsers[] = useSearch(users, search)
    if (isFetch) {
        return <div>fetching</div>
    }
    let listHeader = ['№', 'ФИО', 'Департамент', 'Телефот', 'Почта', 'Пароль', 'Действия',];

    return (
        <div className="margin-top-50">
            <ModalAddUser id={users.length} hide={hide} setHide={setHide} />
            <div className="h4-like">Управление пользователями</div>
            <div className='navigation'>
                {searchBar.map((users: any, index: number) =>
                    <span key={index} onClick={() => { setNavClass(index) }}
                        className={navClass !== index ?
                            "generall-users" :
                            "selected-users generall-users"}
                    >{users}</span>
                )}
                <div className="add-user" onClick={() => setHide(false)}
                > +Добавить пользователя</div>
            </div>
            < input type='text' placeholder='ФИО'
                value={search} className="search-user"
                onChange={(e) => { setSearch(e.target.value) }} />
            <table>
                <tr>
                    {listHeader.map(item =>
                        <th>{item}</th>
                    )}
                </tr>
                <tbody>
                    {searchedUser.map(({ name, department, phone, mail, id, password }) =>
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{department}</td>
                            <td>{phone}</td>
                            <td>{mail}</td>
                            <td>{password}</td>
                            <div>
                                <img className="icon-do change" src={require('../img/pen-chenge.jpg')}
                                    onChange={() => { }}
                                />
                                <img className="icon-do change" src={require('../img/trush.png')}
                                    onClick={() => { deleteUser(id) }}
                                />
                            </div>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    )
}

export default ManagedUsers