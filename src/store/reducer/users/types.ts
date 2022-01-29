import { IUsers } from "../../../types/types";

export interface IStateDefault {
    isFetch: boolean,
    isError: null | string,
    users: IUsers[],
}



export enum EnumUserActions {
    FETCH_USERS = 'FETCH_USERS',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING',
    ADD_USER = 'ADD_USER',
    DELETE_USER = 'DELETE_USER'
}

export interface FetchUserAction {
    type: EnumUserActions.FETCH_USERS,
    payload: IUsers[],
}
export interface SetErrorUserAction {
    type: EnumUserActions.SET_ERROR,
    payload: string | null,
}
export interface IsLoadingUserAction {
    type: EnumUserActions.SET_IS_LOADING,
    payload: boolean,
}
export interface AddUserAction {
    type: EnumUserActions.ADD_USER,
    payload: IUsers,
}
export interface DeleteUserAction {
    type: EnumUserActions.DELETE_USER,
    payload: number,
}

export type UserActions = FetchUserAction |
    SetErrorUserAction |
    IsLoadingUserAction |
    AddUserAction |
    DeleteUserAction;



