import {useState,useEffect} from 'react';
import SpinnerGif from './Component/Spinner'
import './App.css';
import Map from "./Component/map"

function App() {
  const [eventData,setEventData]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    const fetchEvents = async ()=>
    {
      setLoading(true)
      const res =await fetch ('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const {events}= await res.json();
      setEventData(events);
      setLoading(false);
      console.log(events)
    }
    fetchEvents();
   
  },[])

  return (
    <div >
      {!loading?<Map eventData={eventData}/>:<SpinnerGif/>}
      
    </div>
  );
}

export default App;
