import React, { useState } from 'react';

function NewPlantInfo() {
    const [plantName, setName] = useState('');
    const [dateAdopted, setDate] = useState('');
    const [wateringSchedule, setSchedule] = useState('');
    const [sunlight, setSunlight] = useState('');
    const [additionalNotes, setNotes] = useState('');
    const [error, setError] = useState(null);
    
    const handleSubmit = async(e) => {
        console.log('handleSubmit clicked');

        e.preventDefault() //prevents page from refreshing when clicked

        const response = await fetch ('/plants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // put things you want to add into your database here
                'plant_name': plantName,
                'date_adopted': dateAdopted,
                'watering': wateringSchedule,
                'sunlight': sunlight,
                'additional_notes': additionalNotes
            })
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.err) //sends error if response from the router doesnt go through
        }

        if (response.ok) {
            setName(''); //resets form
            setDate(''); //resets form
            setSchedule(''); //resets form
            setSunlight(''); //resets form
            setNotes(''); //resets form
            // setError(null);
            console.log('new plant added', json)
        }
    }

    return (
        <div className="newPlantBox">
            <form className="newPlant" onSubmit={handleSubmit}>
                <h3>Add New Plant to the Family</h3>
                <label>Plant Name:  </label>
                <input type='text'
                onChange={(e) => setName(e.target.value)} //e.target.value is value of the input field typed in
                value={plantName}
                />
                <br />
                
                <label>Date Adopted:  </label>
                <input type='text'
                onChange={(e) => setDate(e.target.value)}
                value={dateAdopted}
                />
                
                <br />

                <label>Watering Schedule:  </label>
                <input type='text'
                onChange={(e) => setSchedule(e.target.value)} 
                value={wateringSchedule}
                />

                <br />

                <label>Sunlight Needs:  </label>
                <input type='text'
                onChange={(e) => setSunlight(e.target.value)} 
                value={sunlight}
                />
                
                <br />

                <label>Additional Notes:  </label>
                <br />
                <textarea id="addlNotes" name="addlNotes" rows="4" cols="40"
                onChange={(e) => setNotes(e.target.value)} 
                value={additionalNotes}
                ></textarea>
                {/* <input type='text'
                onChange={(e) => setNotes(e.target.value)} 
                value={additionalNotes}
                /> */}
                
                
                <div className="newButtons">
                <button id="uploadButton">Upload Image</button>
                <input type='file' id="upload" style={{display: 'none'}} />
                <br />
                <input type="submit" id="add" value="Add" />
                </div>
                {/* <button>Add Plant</button> */}
                {/* {err && <div className="error">{error}</div>} //if there is an error this shows error */}

            </form>
        </div>
    )
}

export default NewPlantInfo;