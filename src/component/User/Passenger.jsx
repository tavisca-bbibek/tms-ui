import React from 'react';

const PassengerDetails = ({name, age, gender}) => {
    return (
        <div className='passenger'>
            <span>{name}</span>
            <span>{age}</span>
            <span>{gender}</span>
        </div>
    );
}

export default PassengerDetails;