import React, {Component} from 'react';

function EditPassengerDetails({name, age, gender, actions}) {
    
    return (
        <div className='passenger-details'>
                <input type='text'placeholder='Name' value={name} required onChange={e  => actions.changeName(e.target.value)} />
               <input type='number' min={5} max={200} placeholder='Age' value={age} required onChange={e  => actions.changeAge(e.target.value)} />
                <select  required  value={gender} onChange={e  => actions.changeGender(e.target.value)} >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                <button onClick={actions.remove}>x</button>
        </div>
    );
}

export default EditPassengerDetails;