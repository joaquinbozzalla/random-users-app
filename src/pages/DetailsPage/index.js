import React, { useState, } from 'react';
import { connect, } from 'react-redux';
import { useParams, Redirect, } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import DataSection from './DataSection';
import css from './DetailsPage.module.css';

function DetailsPage(props) {
    const { id } = useParams();
    const [imageLoaded, setImageLoaded] = useState(false);

    const profile = props.profiles.find(profile => profile.email === id);

    if (profile === undefined) {
        return <Redirect to="/" />;
    }

    const { title, first, last } = profile.name;
    const completeName = `${title} ${first} ${last}`;

    return <div className={css.mainContainer}>
        <img className={css.profileImage} src={profile.picture.large} onLoad={() => setImageLoaded(true)} alt={completeName} />
        {!imageLoaded && <Skeleton height={300} width={300} />}
        <div className={css.nameContainer}>{completeName}</div>
        <DataSection className={css.dataSection} profile={profile} />
        <button className={css.goBackButton} onClick={() => props.history.goBack()}>Go back</button>
    </div>;
}

const mapStateToProps = state => {
    return {
        profiles: state.profileReducer.profiles,
    }
};

export default connect(mapStateToProps)(DetailsPage);