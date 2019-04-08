import './SeasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) => {
    // new Date().getMonth() return month with base 0 => month 0 = january
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} icon massive`}></i>
            <h1>{text} </h1>
            <i className={`icon-right ${iconName} icon massive`}></i>
        </div>
    );
};

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr, its cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasonDisplay;