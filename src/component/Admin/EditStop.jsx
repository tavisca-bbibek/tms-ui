import React from 'react';

const Stop = ({name, placeholder, arrivalTime, arrivalDate, departureTime, departureDate, actions}) =>  {

    const changeName = (event) =>{
        const name = event.target.value;
        actions.changeName(name);
    }

    const changeArrivalDate = (event) =>{
      const arrivalDate = event.target.value;
      actions.changeArrivalDate(arrivalDate);
    }

    const changeArrivalTime = (event) =>{
      const arrivalTime = event.target.value;
      actions.changeArrivalTime(arrivalTime);
    }

    const changeDepartureDate = (event) =>{
      const arrivalDate = event.target.value;
      actions.changeDepartureDate(arrivalDate);
    }
    
    const changeDepartureTime = (event) =>{
      const departureTime = event.target.value;
      actions.changeDepartureTime(departureTime);
    }


    return (
      <div className="stop">
        <input
          type="text"
          value={name}
          placeholder={placeholder}
          onChange={changeName}
        />
        <div className="close" onClick={actions.delete}>&times;</div>
        <fieldset>
          <legend>Arrival</legend>
          <label htmlFor="arrivalDate">Date</label>
          <input
            id="arrivalDate"
            type="date"
            placeholder="Date"
            value={arrivalDate}
            onChange={changeArrivalDate}
          ></input>
          <label htmlFor="arrivalTime">Time</label>
          <input
            id="arrivalTime"
            type="time"
            placeholder="Time"
            value={arrivalTime}
            onChange={changeArrivalTime}
          ></input>
        </fieldset>
        <fieldset>
          <legend>Departure</legend>
          <label htmlFor="departureDate">Date</label>
          <input
            id="departureDate"
            type="date"
            placeholder="Date"
            value={departureDate}
            onChange={changeDepartureDate}
          ></input>
          <br />
          <label htmlFor="departureTime">Date</label>
          <input
            id="departureTime"
            type="time"
            placeholder="Time"
            value={departureTime}
            onChange={changeDepartureTime}
          ></input>
        </fieldset>
      </div>
    );
}

export default Stop;