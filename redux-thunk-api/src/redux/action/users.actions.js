import actionType from "../actionType/users.actionType";

const userLoadStart =() =>({
    type: actionType.USERS_LOAD_START,
})

const userLoadSuccess=(users)=>({
    type: actionType.USERS_LOAD_SUCCESS,
    payload:users,
})

const userLoadError = (errorMessage)=>({
    type:actionType.USERS_LOAD_ERROR
});

export default{
    userLoadStart,
    userLoadSuccess,
    userLoadError,
};
