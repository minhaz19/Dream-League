import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailMainPart from '../DetailMainPart/DetailMainPart';
import Header from '../Header/Header';

const TeamDetails = () => {
    const {idTeam} = useParams();
    const [teamDetail , setTeamDetail] = useState([]);

    const {strTeamBanner,strTeamBadge} = teamDetail;

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeamDetail(data.teams[0]))
    },[])
    return (
        <div className="HomeStyle">
            <div className="header-img">
                <img className="background-img" src={strTeamBanner} alt=""/>
                <img className="centered" src={strTeamBadge} alt="" width="15%"/>
            </div>
            <DetailMainPart teamDetail={teamDetail}></DetailMainPart>
        </div>
    );
};

export default TeamDetails;