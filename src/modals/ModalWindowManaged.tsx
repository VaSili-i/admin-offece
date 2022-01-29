import { sensitiveHeaders } from 'http2';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import './style/ModalWindowManagedStyle.css'

interface IModalWindowManagedProps {
    hide: boolean,
    setHide: ((hide: boolean) => void),
    access: {
        title: string,
        access: string
    }
}


const ModalWindowManaged: FC<IModalWindowManagedProps> =
    function ({ access, hide, setHide }) {

        let [list, setList] = useState([
            { id: 3, title: 'Москва' },
            { id: 2, title: 'Удан-Удэ' },
            { id: 1, title: 'Новосибирск' },
        ])

        let [title, setTitle] = useState('');
        let [idTo, setId] = useState(list[0].id + 1);
        let [search, setSearch] = useState('');

        function addList(e: any, index: number) {
            if (access.access === 'Расширяймый') {
                setList(list.map(({ id, title }, indx) => {
                    return indx === index ?
                        { title: e.target.value, id } :
                        { title, id }
                }
                ))
            }
        }

        if (hide) {
            return null
        }

        function addCity() {
            setList([{ id: idTo, title }, ...list]);
            setTitle('');
            setId(++idTo)
        }

        function accessCountShow(arr: any) {
            let noShow = 0;
            if (arr.length > 5) {
                noShow = arr.length - 5;
            }
            return noShow
        }

        function searching() {
            return list.filter((list, index, arr) => {
                let noShow = accessCountShow(arr);
                if (noShow > index + 1) {
                    return false
                }
                return list.title.toLowerCase().includes(search.toLowerCase())
            });
        }
        return (
            <div className='window-madal'>
                <div className="form-city">
                    <div className="h-like">
                        <strong>Города</strong>
                    </div>
                    <input placeholder='Поиск' type='text'
                        value={search} className='search'
                        onChange={(e) => { setSearch(e.target.value) }} />
                    <div className="form-city-input">
                        <div className="thead-like">
                            <span>
                                <strong>Индификатор</strong>
                            </span>
                            <span className="name-city">
                                <strong>Название</strong>
                            </span>
                            <span className="add-news" onClick={addCity}
                            >+Добавить</span>
                        </div>
                        <div className="flex-block">
                            <span className='id-city'>{idTo}</span>
                            <input placeholder='Название города'
                                onChange={(e) => { setTitle(e.target.value); }}
                                className="input-city" value={title} type='text' />
                        </div>
                        {searching().map(({ id, title }, index) =>
                            <div key={id} className="flex-block">
                                <div className="id-city">{id}</div>
                                <input onChange={(e) => { addList(e, index) }}
                                    className="input-city" value={title} />
                            </div>
                        )}
                        <div className="block-button-city-save">
                            <button className="button-save-city"
                                onClick={() => { setHide(true) }}>Сохронить</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default ModalWindowManaged