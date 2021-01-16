import React from 'react'
import GoogleMapReact from 'google-map-react'
import  LocationMarker from './locationMarker'
import LocationInfoBox from './LocationInfoBox'
import {useState} from 'react'



const Map=({center,zoom,eventData})=>
{
    const [LocationInfo,setLocationInfo] = useState (null)

    const marker=eventData.map((ev)=>{
        if(ev.categories[0].id===8)
        {
           return( <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                    onClick={()=>setLocationInfo({id:ev.id,title:ev.title})}
                    />)
           
        }
        //return (alert(ev)) 
        return null;
        //
                
        //console.log("Consoled value"+ev.categories[0].id)
    })
    return(
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyAMYb8ut2LOwaH22oppJbBRl365wjAJtVc'}}
            defaultCenter={center}
            defaultZoom={zoom}
            >
            {marker}

            </GoogleMapReact>

           {LocationInfo && <LocationInfoBox info={LocationInfo}/>}
           {console.log(LocationInfo)}
        </div>
    )
}

Map.defaultProps ={
    center: {
        lat:27.2046,
        lng:77.4977
    },
    zoom:6
}
export default Map