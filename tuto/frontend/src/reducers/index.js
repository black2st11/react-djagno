import { combineReducers } from "redux";
import heads from "./heads";
import errors from "./errors"
import messages from "./messages"
import auth from "./auth"

export default combineReducers({
    heads,
    errors,
    messages,
    auth
});