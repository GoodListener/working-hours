const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

export const login = user => ({type: LOGIN, user});
export const logout = user => ({type: LOGOUT, user});

const initialState = {
    isLogined: false,
    userName: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case LOGIN :
            return {
                ...state,
                isLogined: true,
                userName: action.user
            };
        case LOGOUT :
            return {
                ...state,
                isLogined: false,
                userName: action.user
            }
        default :
            return state;
    }
}