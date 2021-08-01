import { FETCH_PROFILES_SUCCESS, FETCH_PROFILES_ERROR, FETCH_PROFILES_LOADING, } from '../constants';

const initialState = {
    profiles: [],
    error: false,
    loading: false,
}

const profileReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PROFILES_SUCCESS:
            return { ...state, profiles: [...state.profiles, ...action.payload], error: false, loading: false, };
        case FETCH_PROFILES_ERROR:
            return { ...state, error: action.payload, loading: false, };
        case FETCH_PROFILES_LOADING:
            return { ...state, error: false, loading: true, };
        default:
            return state;
    }
}

export default profileReducer;