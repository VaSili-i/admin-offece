import React, { useState } from 'react';
import '../style/PersonalDataStyle.css'
import '../style/NewsStyle.css'
import ModalNews from '../modals/ModalNews';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const News = function () {
    const { news, isFetch } = useTypedSelector(state => state.news);
    const { setNews, addNews } = useActions();

    let [hide, setHide] = useState(true)

    function deleteNew(index: number) {
        setNews(news.filter((elem, ind) => index !== ind))
    }

    if (isFetch) {
        return <div>fetching</div>
    }
    console.log(news)
    return (
        <div className="margin-top-50">
            <ModalNews addNews={addNews} hide={hide} setHide={setHide} />
            <div className='hg4'>
                <div className="h4-like">Редактирование новостей</div>
                <div className="change"
                    onClick={() => { setHide(false) }}>+Cоздать новости</div>
            </div>
            <div style={{ display: 'flex' }}>
                {news.map(({ title, body, photo, date }, index) =>

                    <div>
                        <img className='new-photo'
                            src={require('../img/' + photo)} />
                        <div>{date}</div>
                        <div className="new-info">
                            <div>{title}</div>
                            <img onClick={() => { }}
                                className="icon-do change"
                                src={require('../img/pen-chenge.jpg')} />
                            <img className="icon-do change"
                                onClick={() => { deleteNew(index) }}
                                src={require('../img/trush.png')} />

                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default News