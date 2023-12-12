import React from 'react';
import PropTypes from 'prop-types';
import './badgeIcon.css';

export const BadgeIcon = ({ iconType, number }) => {
  return (
    <div className={`badge-icon-number ${iconType}`}>
      <span className="badge-icon">{getIconByType(iconType)}</span>
      <span className="badge-number">{number}</span>
    </div>
  );
};

const getIconByType = (type) => {
  switch (type) {
    case 'people':
      return '👥'; // Icono tipo 1
    case 'ideas':
      return '💡'; // Icono tipo 2
    case 'views':
      return '👁️'; // Icono tipo 3
    default:
      return '';
  }
};

BadgeIcon.propTypes = {
   /**
   * Select the proper icon
   */
    iconType: PropTypes.oneOf(['people', 'ideas', 'views']).isRequired,
    number: PropTypes.number,
  };

BadgeIcon.defaultProps = {
  iconType: 'people',
  number: 32,
};

export default BadgeIcon;
