import { NewsActionsCreators } from "./news/action-creators";
import { UserActionsCreators } from "./users/action-creators";
import { staffingActionCreators } from "./staffingStructure/action-creators";


export const allActionCreators = {
    ...NewsActionsCreators,
    ...UserActionsCreators,
    ...staffingActionCreators
}