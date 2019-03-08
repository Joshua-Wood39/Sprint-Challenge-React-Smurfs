import React from 'react';

const SmurfUpDel = props => {

    console.log(props)
    
    const { id } = props.match.params;

    const smurf = props.smurfs.find(thing => `${thing.id}` === id);
    console.log(smurf);
    
    return (
    <div className="Smurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <div>
            <button onClick={props.deleteSmurf}>Delete</button>
            <button onClick={props.updateSmurf}>Update</button>
        </div>
    </div>
    );
};

export default SmurfUpDel;