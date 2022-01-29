import { AppDispatch } from "../..";
import { FetchUserAction, SetErrorUserAction, IsLoadingUserAction, EnumUserActions, AddUserAction, DeleteUserAction } from "./types";
import { IUsers } from "../../../types/types";
import axios from 'axios';

export const UserActionsCreators = {
    setUser: (users: IUsers[]): FetchUserAction => ({ type: EnumUserActions.FETCH_USERS, payload: users }),
    setIsLoading: (loading: boolean): IsLoadingUserAction => ({ type: EnumUserActions.SET_IS_LOADING, payload: loading }),
    setError: (error: string): SetErrorUserAction => ({ type: EnumUserActions.SET_ERROR, payload: error }),
    addUser: (user: IUsers): AddUserAction => ({ type: EnumUserActions.ADD_USER, payload: user }),
    deleteUser: (id: number): DeleteUserAction => ({ type: EnumUserActions.DELETE_USER, payload: id }),
    fetchUser: () => async (dispath: AppDispatch) => {
        try {
            dispath(UserActionsCreators.setIsLoading(true));

            let resolve = await axios.get<IUsers[]>('./server/users.json');
            dispath(UserActionsCreators.setUser(resolve.data));

        } catch (e) {
            dispath(UserActionsCreators.setError('ощибка загрузки'));
        }
    }
}