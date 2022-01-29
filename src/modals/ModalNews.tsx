import React, { FC, useState } from 'react';
import './style/ModalNewStyle.css';
import { IAddNews } from '../types/types';

interface IModalWindowProps {
    hide: boolean,
    setHide: (hide: boolean) => void,
    addNews: IAddNews
}


function getTime() {
    let now = new Date();
    let day = now.getDate();
    let strDay = String(day);
    strDay = strDay.length == 2 ? strDay : '0' + strDay;
    return strDay + ':' + (1 + now.getMonth()) + ':' + now.getFullYear()
}

const ModalWindow: FC<IModalWindowProps> = function ({ hide, setHide, addNews }) {

    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    let [photo, setPhoto] = useState('');
    let [linkPhoto, setLinkPhoto] = useState('');

    if (hide) {
        return null
    }

    function addNewsFunction() {
        if (!photo) {
            addNews({ date: getTime(), title, body, photo: 'template_01.png' })
        } else {
            addNews({ date: getTime(), title, body, photo })
        }
        setHide(true)
    }

    return (
        <div className="window-madal">
            <div className="form">
                <div className="block-form">
                    <div>Тема</div>
                    <input className="inputs" placeholder='Введите текст'
                        value={title} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className="block-form">
                    <div>Текст</div>
                    <textarea value={body} placeholder='Введите текст'
                        onChange={(e) => setBody(e.target.value)} />
                </div>
                <div className="block-form">
                    <span>Ссылка</span>
                    <input value={linkPhoto} className="input-link" type="text"
                        onChange={(e) => { setLinkPhoto(e.target.value) }} />
                    <input value={photo} onChange={(e) => { setPhoto(e.target.value) }}
                        className="inpu-link" type="file" />
                </div>
                <div className="link-photo">
                </div>
                <div className="button-form">
                    <button className="button-save"
                        onClick={addNewsFunction}
                    >Сохранить</button>
                    <button onClick={() => { setHide(true) }}
                        className="button-refuce">Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default ModalWindow  