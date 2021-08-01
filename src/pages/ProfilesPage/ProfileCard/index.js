import React from 'react';
import { Link } from 'react-router-dom';
import css from './ProfileCard.module.css';

function ProfileCard({ profile }) {
    let { name, location, picture, } = profile;
    let { title, first, last } = name;
    let { city, country, } = location;
    let completeName = `${title} ${first} ${last}`;

    return (
        <Link className={css.link} to={`/details/${profile.email}`}>
            <div className={css.profileCard}>
                <img className={css.thumbnail} src={picture.thumbnail} alt={completeName} />
                <div className={css.dataContainer}>
                    <span className={css.name}>{completeName}</span>
                    <span className={css.location}>{`${city}, ${country}`}</span>
                </div>
            </div>
        </Link>
    );
}

export default ProfileCard