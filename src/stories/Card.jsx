import React from 'react';
import PropTypes from 'prop-types';
import './card.css';
import {Badge} from './Badge';
import {BadgeIcon} from './BadgeIcon';

export const Card = ({
    photoUrl,
    isClose,
    people,
    ideas,
    views,
    title,
    description
}) => {
    return <>
    <div className='card'>
    <div className='card--head'>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="200" width="320px" className='card--head--image' // 
/>
        <span style={{position: "absolute", top:"5%", left: "2%"}}>
        <Badge label={"Close"} backgroundColor={"lightBlue"} uppercase={true}/>
        </span>
    </div>
    <div className="card--body">
    <h2 className="card--title">{title}</h2>
    <p className="card--desc">{description}</p>
    <Badge label={"Open"} backgroundColor={"darkBlue"} uppercase={false}/>
    <div className='card--body--footer'>
        <BadgeIcon iconType={'people'} number={120}/>
        <BadgeIcon iconType={'ideas'} number={55}/>
        <BadgeIcon iconType={'views'} number={185}/>
    </div>
    </div>
    </div>
    </>
}

export default Card;