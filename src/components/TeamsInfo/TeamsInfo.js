import React from 'react';
import './TeamsInfo.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const TeamsInfo = (props) => {
    const{strTeamBadge,strTeam,idTeam,strSport} =props.team;
    let history = useHistory();

    const handleClick = (idTeam) =>{
        const url =`/detail/${idTeam}`;
        history.push(url);
    }
    return (
        <div className="team-container">
            <img src={strTeamBadge} alt=""/>
            <h1><strong>{strTeam}</strong></h1>
            <h5>Sports type: {strSport}</h5>
            <Button onClick={() =>handleClick(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
        </div>
    );
};

export default TeamsInfo;