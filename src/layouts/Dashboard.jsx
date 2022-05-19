import React from 'react'
import { Container } from 'semantic-ui-react';
import JobAdvertisement from './JobAdvertisement';
import Navi from './Navi';

export default function Dashboard() {
    return (
        <div>
            <Navi />
            <Container className="main">
                <JobAdvertisement />
            </Container>
        </div>
    )
}
