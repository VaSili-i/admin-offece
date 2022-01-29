
export interface INews {
    title: string,
    date: string,
    body: string,
    photo: string
}


export interface IDefaultState {
    isFetch: boolean,
    isError: string | null,
    news: INews[]
}

export enum EnumNewsAction {
    FetchNewsAction = 'FetchNewsAction',
    SetErrorNewsAction = 'SetErrorNewsAction',
    IsLoadingNewsAction = 'IsLoadingNewsAction',
    AddNewsAction = 'AddNewsAction'
}

export interface AddNewsAction {
    type: EnumNewsAction.AddNewsAction,
    payload: INews,
}

export interface IsLoadingNewsAction {
    type: EnumNewsAction.IsLoadingNewsAction,
    payload: boolean,
}
export interface SetErrorNewsAction {
    type: EnumNewsAction.SetErrorNewsAction,
    payload: string | null,
}
export interface FetchNewsAction {
    type: EnumNewsAction.FetchNewsAction,
    payload: INews[],
}
export type NewsActions = IsLoadingNewsAction | SetErrorNewsAction | FetchNewsAction | AddNewsAction;

