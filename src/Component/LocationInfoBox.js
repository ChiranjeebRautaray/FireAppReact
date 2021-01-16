import React from 'react'

const LocationInfo =({info})=>
    {
        return(<div className="location-info">
            <h2>Event Loaction Info</h2>
            <ul>
                <li>
                   NASA EO ID: <strong>{info.id}</strong>
                </li>

                <li>
                    Country Details: <strong>{info.title}</strong>
                </li>
            </ul>

        </div>

        )

    }

    export default LocationInfo
