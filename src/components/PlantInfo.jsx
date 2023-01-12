import React from "react";

function PlantInfo({key, plant}) {
    console.log('im inside plant info', plant, key)
    return (
        <div className="plantInfoCard">
            <h4>{plant.plant_name}</h4>
            <br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br />
            <p><strong>Date Adopted: </strong>{plant.date_adopted}</p>
            <p><strong>Watering Schedule: </strong>{plant.watering}</p>
            <p><strong>Sunlight Needs: </strong>{plant.sunlight}</p>
            <p><strong>Additional Notes: </strong>{plant.additional_notes}</p>
        </div>
    )
}

export default PlantInfo;