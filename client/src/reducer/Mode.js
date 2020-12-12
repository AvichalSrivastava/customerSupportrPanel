const INITIAL_STATE =
{
    loginData : {},
    login:false
}
export default (state=INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case 'login':
            return {...state,loginData: action.payload};
        break;

        default:
            return state;
        break;
    }
};