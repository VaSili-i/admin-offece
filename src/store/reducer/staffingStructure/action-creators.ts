import axios from 'axios';
import { AppDispatch } from '../..';
import { EnumStaffingStructure, FetchInformationDepar, FetchManagementDepar, IUserStaffing } from './types';

export const staffingActionCreators = {
    setInformationDepar: (infomation: IUserStaffing[]): FetchInformationDepar => {
        return { type: EnumStaffingStructure.FetchInformationDepar, payload: infomation }
    },
    setManagementDepar: (management: IUserStaffing[]): FetchManagementDepar => {
        return { type: EnumStaffingStructure.FetchManagementDepar, payload: management }
    },
    fetchInformationDepar: () => async (dispatch: AppDispatch) => {
        let response = await axios.get<IUserStaffing[]>('./server/informationDepartment.json');
        dispatch(staffingActionCreators.setInformationDepar(response.data))
    },

    fetchManagementDepar: () => async (dispatch: AppDispatch) => {
        let response = await axios.get<IUserStaffing[]>('./server/managementDepartment.json');
        dispatch(staffingActionCreators.setManagementDepar(response.data))
    }
}