import React from 'react';
import PropTypes from 'prop-types';
import './badge.css';


export const Badge = ({backgroundColor, label, uppercase}) => {
    const Uppercase = uppercase ? 'uppercase' : 'lowercase';
    return <>
    <div  className={['badge', `badge--${backgroundColor}`, Uppercase].join(' ')}>{label}</div>
    </>;
}

Badge.propTypes = {
    /**
    * Backgroundcolor
    */
    backgroundColor: PropTypes.string,
   /**
   * Uppercase or Capitalize?
   */
    uppercase: PropTypes.bool,
}

Badge.defaultProps = {
    backgroundColor: PropTypes.oneOf(['darkBlue', 'lightBlue']),
    uppercase: false,
    label:"test"
}

export default Badge;