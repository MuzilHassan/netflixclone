import React, { useState } from 'react';
import Row from '../Row';
import './HomeScreen.css';

import axios from '../axios';
import requests from '../request';
import Banner from '../Banner';
import Nav from '../Nav';


function homeScreen() {
    return (
        <div className='homeScreen'>
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comdey Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />

        </div>
    );
}

export default homeScreen;