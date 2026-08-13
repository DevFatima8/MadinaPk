import React from 'react';
import DetailsContact from '../../features/team-details/DetailsContact';
import MemberDetails from '../../features/team-details/MemberDetails';
import DefaultBanner from '../../features/default-banner/DefaultBanner';

const TeamDetails: React.FC = () => {
    return (
        <>
            <DefaultBanner title='Team Details' />
            <MemberDetails />
            <DetailsContact />
        </>
    );
};

export default TeamDetails;