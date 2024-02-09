import React from 'react';
import '../style/ArrowIcon.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ArrowIcon = () => {
  return (
    <span className='arrow_container'>
        <FontAwesomeIcon icon={faArrowUp} />
    </span>
  )
}

export default ArrowIcon