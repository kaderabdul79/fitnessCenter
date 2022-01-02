import React from 'react';
import Container from '@mui/material/Container';
import MemberCard from '../../components/MemberCard/MemberCard';
import Gymcenter from '../../components/Gymcenter/Gymcenter';

const Home = () => {
    return (
        <Container>
            {/* <MemberCard></MemberCard> */}
            <Gymcenter></Gymcenter>
        </Container>
    );
};

export default Home;