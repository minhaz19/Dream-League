import React from 'react';
import './DetailMainPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack, faFlag ,faFutbol, faVenusMars} from '@fortawesome/free-solid-svg-icons'
import facebook from '../../Icon/Facebook.png';
import twitter from '../../Icon/Twitter.png';
import youTube from '../../Icon/YouTube.png';
import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';

const DetailMainPart = (props) => {
    const {strCountry,strGender,strSport,strTeam,intFormedYear,strDescriptionEN, strFacebook, strYoutube, strTwitter} = props.teamDetail;
    const fb = `https://${strFacebook}`;
    const tt = `https://${strTwitter}`;
    const yt = `https://${strYoutube}`;
    let image;
    if(strGender === 'Male'){
        image =  <img className="detail-img" src={maleImage} alt=""/>
    }
    else if(strGender === 'Female'){
        image = <img className="detail-img" src={femaleImage} alt=""/>
    }

    return (
        <div className="main-part">
            <div className="detail-container">
                <div className="team-details">
                    <h1>{strTeam}</h1>
                    <h5><FontAwesomeIcon icon={faThumbtack}/> Founded: {intFormedYear}</h5>
                    <h5><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
                    <h5><FontAwesomeIcon icon={faFutbol}/> sport Type: {strSport}</h5>
                    <h5><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender}</h5>
                </div>
                {image}
            </div>
            <p>{strDescriptionEN}</p>
            <div className="social-site">
                <a href={fb} target="_blank" rel="noreferrer"><img src={facebook} alt=""/></a>
                <a href={tt} target="_blank" rel="noreferrer"><img src={twitter} alt=""/></a>
                <a href={yt} target="_blank" rel="noreferrer"><img src={youTube} alt=""/></a>
            </div>
        </div>

    );
};

export default DetailMainPart;