import { FETCH_PROFILES_SUCCESS, FETCH_PROFILES_ERROR, FETCH_PROFILES_LOADING, PROFILES_PER_PAGE } from '../constants';
import { fetchProfiles, } from '../api/profileApi';

export const fetchProfilesSuccess = (profiles) => ({
    type: FETCH_PROFILES_SUCCESS,
    payload: profiles,
});

export const fetchProfilesError = (error) => ({
    type: FETCH_PROFILES_ERROR,
    payload: error,
});

export const fetchProfilesLoading = () => ({
    type: FETCH_PROFILES_LOADING,
});

export const fetchProfilesAction = () => {
    return async (dispatch, getState) => {
        const { profileReducer, } = getState();
        const currentAmountOfProfiles = profileReducer.profiles.length;
        const nextPage = currentAmountOfProfiles / PROFILES_PER_PAGE + 1;

        dispatch(fetchProfilesLoading());
        const profiles = await fetchProfiles(nextPage, PROFILES_PER_PAGE);
        profiles.status === 200
            ? dispatch(fetchProfilesSuccess(profiles.data.results))
            : dispatch(fetchProfilesError(true));
    };
};