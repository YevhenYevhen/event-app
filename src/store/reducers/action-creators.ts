import { EventActionCreators } from './event/action-creators';
import { AuthActionCreators } from "./auth/action-creators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...EventActionCreators
};