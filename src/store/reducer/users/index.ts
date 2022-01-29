import { IStateDefault, UserActions, EnumUserActions } from "./types"


const stateDefault: IStateDefault = {
    isFetch: false,
    isError: null,
    users: [
        {
            "id": 1,
            "name": "Иванов Иван Иванович",
            "department": "Цифровизация",
            "phone": 843242523,
            "mail": "@mail.ru",
            "password": "Отправлен"
        }
    ]
}


export const userReducer =
    function (state = stateDefault, action: UserActions): IStateDefault {
        switch (action.type) {
            case EnumUserActions.SET_IS_LOADING:
                return { ...state, isFetch: action.payload }
            case EnumUserActions.FETCH_USERS:
                return { ...state, users: action.payload, isFetch: false }
            case EnumUserActions.SET_ERROR:
                return { ...state, isError: action.payload, isFetch: false }
            case EnumUserActions.ADD_USER:
                return { ...state, users: [action.payload, ...state.users] }
            case EnumUserActions.DELETE_USER:
                return { ...state, users: [...state.users.filter(el => el.id !== action.payload)] }
            default:
                return state
        }
    }

