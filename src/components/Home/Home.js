import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import TeamsInfo from '../TeamsInfo/TeamsInfo';
import './Home.css';

const Home = () => {
    const [teams,setTeams] = useState([]);
    const allTeams = teams.slice(0,15)

    useEffect(() => {
        const url ='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    },[])
    return (
        <div className="HomeStyle">
            <Header></Header>
            <div className="teams-style">
                {
                    allTeams.map(tm => <TeamsInfo key={tm.idTeam} team={tm}></TeamsInfo>)
                }
            </div>
        </div>
    );
};

export default Home;