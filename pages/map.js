import { MapContainer,Marker, TileLayer, Popup } from "react-leaflet";
import { useState } from "react";
export default function MapStreet(){    
    const [markers, setMarkers]= useState([
        {cord:[12.3774729,20.446257]},
        {cord:[45.3774729,10.45224757]},
        {cord:[40.3774729,15.4364757]},
    ])

return(
<MapContainer center={[12.374729,22.4464757]} zoom={13} scrollWheelZoom={true} style={{height: "300px", width: "300px",zIndex:'1'}}>
          <TileLayer
              url={`example.com`}
              attribution='Map data &copy; <a>Mapbox</a>'
          />
          {markers?.map((element,idx)=>{
            return (<Marker
                position={element?.cord}
                draggable={true}
                animate={true}
                key={idx}
            >
              <Popup>
                Test PopUP
              </Popup>
            </Marker>
          )})}
        </MapContainer> 

)}
