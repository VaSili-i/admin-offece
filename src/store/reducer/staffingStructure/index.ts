import { IDefaultState, StaffingAction, EnumStaffingStructure } from './types';


const defaultState = {
    usersManagment: [
        {
            "name": "Иванов И. И.",
            "department": "Департамент информатизации",
            "post": "Руководитель департамент"
        },
    ],
    usersInformation: [
        {
            "name": "Понькова П. П.",
            "department": "Департамент управления",
            "post": "Руководитель департамент"
        },
    ],

} as IDefaultState;


export const reducerStaffingStructure =
    function (state = defaultState, action: StaffingAction): IDefaultState {
        switch (action.type) {
            case EnumStaffingStructure.FetchInformationDepar:
                return { ...state, usersInformation: action.payload }
            case EnumStaffingStructure.FetchManagementDepar:
                return { ...state, usersManagment: action.payload }
            default:
                return state
        }
    }




