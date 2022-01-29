import React, { useState } from 'react';
import '../style/ManagedListStyle.css'
import ModalWindowManaged from '../modals/ModalWindowManaged';

const ManagedList = function () {
    let [list, setList] = useState([
        { title: 'Справочник 1', access: 'Нерасширяймый', doing: 'Посмотреть' },
        { title: 'Справочник 2', access: 'Нерасширяймый', doing: 'Посмотреть' },
        { title: 'Справочник 3', access: 'Нерасширяймый', doing: 'Посмотреть' },
        { title: 'Справочник 4', access: 'Расширяймый', doing: 'Добавить' },
    ])
    let [access, setAccess] = useState({
        access: '', title: ''
    })
    let [hide, setHide] = useState(true)

    function showModal(title: string, access: string) {
        setAccess({ title, access });
        setHide(false)
    }
    return (
        <div className="margin-top-50">
            <ModalWindowManaged
                setHide={(hide) => { setHide(hide) }}
                hide={hide} access={access} />
            <div className="hg4 h4-like">Управление Справочниками</div>
            <div className="manage-list">
                {list.map(({ title, access, doing }, index) =>
                    <div key={index} className="manage-list-title">
                        <div>
                            <div className="title">{title}</div>
                            <div className="look-list"
                                onClick={() => { showModal(title, access) }}
                            >{doing}</div>
                            <span data-access={title}
                            >{access}</span>
                        </div>
                    </div>
                )}

            </div>

        </div >
    )
}

export default ManagedList