export interface IUserStaffing {
    name: string,
    department: string,
    post: string
}


export interface IDefaultState {
    usersManagment: IUserStaffing[],
    usersInformation: IUserStaffing[],

}


export enum EnumStaffingStructure {
    FetchInformationDepar = 'FetchInformationDepar',
    FetchManagementDepar = 'FetchManagementDepar',
}


export interface FetchInformationDepar {
    type: EnumStaffingStructure.FetchInformationDepar,
    payload: IUserStaffing[],
}

export interface FetchManagementDepar {
    type: EnumStaffingStructure.FetchManagementDepar,
    payload: IUserStaffing[],
}

export type StaffingAction = FetchInformationDepar | FetchManagementDepar;
