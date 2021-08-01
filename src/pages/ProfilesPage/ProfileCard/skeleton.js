import React from 'react';
import Skeleton from 'react-loading-skeleton';
import css from './ProfileCard.module.css';

function ProfileCardSkeleton() {
    return (
        <div>
            <div className={css.profileCard}>
                <Skeleton circle={true} height={50} width={50} />
                <div className={css.dataContainer}>
                    <Skeleton width={140} />
                    <Skeleton width={70} />
                </div>
            </div>
        </div>
    );
}

export default ProfileCardSkeleton