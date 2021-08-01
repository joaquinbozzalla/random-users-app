import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import css from './ProfilesPage.module.css';
import ProfileCard from './ProfileCard';
import ProfileCardSkeleton from './ProfileCard/skeleton';
import { fetchProfilesAction, } from '../../actions';
import { PROFILES_PER_PAGE, } from '../../constants';

class ProfilesPage extends Component {
    componentDidMount() {
        if (this.props.profiles === undefined || this.props.profiles.length <= 0) {
            this.props.fetchProfiles();
        }

    }

    render() {
        const { fetchProfiles, profiles, error, loading, } = this.props;

        return (
            <Fragment>
                <h1 className={css.profilesPageTitle}>Users</h1>
                <InfiniteScroll
                    dataLength={profiles.length}
                    next={fetchProfiles}
                    hasMore={true}
                >
                    <div className={css.profilesContainer}>
                        {profiles.map((profile, index) => <ProfileCard key={index} profile={profile} />)}
                    </div>
                </InfiniteScroll>

                {loading && <div className={css.profilesContainer}>
                    {[...Array(PROFILES_PER_PAGE)].map((_, index) => <ProfileCardSkeleton key={index} />)}
                </div>}

                {error && <h1 className={css.errorMessage}>Oops! Something is wrong. Please, reload the page.</h1>}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.profileReducer.error,
        loading: state.profileReducer.loading,
        profiles: state.profileReducer.profiles,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProfiles: () => dispatch(fetchProfilesAction()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesPage);