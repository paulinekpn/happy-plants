import React from "react";
import { plantsReducer } from "../context/PlantsContext";
import { usePlantsContext } from '../hooks/usePlantsContext';

function PlantInfo({key, plant}) {

    const {dispatch} = usePlantsContext();

    const handleClick = async () => {
        console.log('plants reducer id', plant._id)

        const response = await fetch ('/plants/' + plant._id, {
            method: 'DELETE'
        })

        const data = await response.json();
        console.log('going to delete this object id',data)
 
        if (response.ok) {
            dispatch({type:'DELETE_PLANT', payload: data})
        }
    }


    return (
        <div className="plantInfoCard">
            <h4>{plant.plant_name}</h4>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <p><strong>Date Adopted: </strong>{plant.date_adopted}</p>
            <p><strong>Watering Schedule: </strong>{plant.watering}</p>
            <p><strong>Sunlight Needs: </strong>{plant.sunlight}</p>
            <p><strong>Additional Notes: </strong>{plant.additional_notes}</p>
            <div id="delete">
            <button id="deleteButton" onClick={handleClick}>Plant has moved (on)..</button>
            </div>
        </div>
    )
}

export default PlantInfo;