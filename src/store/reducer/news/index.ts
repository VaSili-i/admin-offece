import { IDefaultState, NewsActions, EnumNewsAction } from "./types"




const defaultState: IDefaultState = {
    isFetch: false,
    isError: null,
    news: [
        {
            title: 'Новости суббота',
            date: '23.11.2019',
            body: '',
            photo: 'download.jpeg'
        },
    ]
}




export const newsReducers =
    function (state = defaultState, action: NewsActions): IDefaultState {
        switch (action.type) {
            case EnumNewsAction.IsLoadingNewsAction:
                return { ...state, isFetch: action.payload }
            case EnumNewsAction.FetchNewsAction:
                return { ...state, news: action.payload, isFetch: false }
            case EnumNewsAction.SetErrorNewsAction:
                return { ...state, isError: action.payload }
            case EnumNewsAction.AddNewsAction:
                return { ...state, news: [action.payload, ...state.news] }
            default:
                return state
        }

    }