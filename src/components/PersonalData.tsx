import React, { useState, ChangeEvent } from 'react';
import '../style/PersonalDataStyle.css'

const PersonalData = function () {

    const [fullName, setFullName] = useState('Васильев Иван Романович');
    const [email, setEmail] = useState('vasiliev@gmail.com')
    const [isChange, setIsChange] = useState(false)
    let [avatarPhoto, setAvatarPhoto] = useState('')

    function changeData(e: ChangeEvent<HTMLInputElement>) {
        if (!isChange) {
            return
        }
        if (e.target.name === 'fullName') {
            setFullName(e.target.value)
        } else {
            setEmail(e.target.value)
        }
    }

    return (
        <div>
            <div className='hg4'>
                <div className="h4-like">Персональные данные</div>
                <div className='change'
                    onClick={() => { setIsChange(!isChange) }}>
                    <div>
                        Редактировать
                    </div>
                </div>

            </div>
            <div className="forms">
                <div className="photo">
                    {isChange ?
                        <label className='blue-text'>загрузить фото
                            <input value={avatarPhoto}
                                onChange={(e) => { setAvatarPhoto(e.target.value) }}
                                hidden className="file" type='file'>
                            </input>
                        </label>
                        :
                        <label>загрузить фото</label>
                    }
                </div>
                <div className="formss">
                    <div>
                        <strong className="person-data"> ФИО </strong>
                        <input onChange={(e) => { changeData(e) }} value={fullName} name="fullName"
                            className={isChange ? 'form-input-p form-item-change' : "form-input-p"}
                            type="text" />
                    </div>
                    <div>
                        <strong className="person-data">Email</strong>
                        <input className={isChange ? 'form-input-p form-item-change' : "form-input-p"}
                            onChange={(e) => { changeData(e) }} value={email} type="text" />
                    </div>
                </div >
            </div >
        </div >
    )
}

export default PersonalData