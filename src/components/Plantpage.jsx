import React, { useEffect, useState } from 'react';
import PlantInfo from './PlantInfo.jsx';
import { usePlantsContext } from '../hooks/usePlantsContext';

function Homepage() {
    // const [plants, setPlants] = useState([]);
    const {plants, dispatch} = usePlantsContext();

    useEffect(() => {
        console.log('useEffect ran');

        fetch ('/plants', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // setPlants(data)
                dispatch({type:'SET_PLANTS', payload: data})
            })
            .catch((error) => console.log("ERROR"));
        }, []) 

    const displayPlants = []
    if (plants) {
        plants.forEach((plant) => {
            console.log('plant id', plant._id)
            console.log('plant', plant)
             displayPlants.push(<PlantInfo key={plant._id} plant={plant} />)
        })
        
    }


    return (
        <div className="plantPage">
            {/* cycle through the plants exist && then run through each if so */}
                {/* {plants && plants.map((plant)=> {
                    <PlantInfo key={plant._id} plant={plant} />
                })} */}
                {displayPlants}
        </div>
    )
}

export default Homepage;