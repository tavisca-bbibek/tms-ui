import React from 'react';
import PassengerDetails from './Passenger';


const Ticket = ({id, trainId, passengers}) => {

    return (
        <div className='ticket'>
            <span>{id}</span>
            <span>{trainId}</span>
            {passengers.map(passenger => <PassengerDetails {...passenger}/>)}
        </div>
    );
}

export default Ticket;