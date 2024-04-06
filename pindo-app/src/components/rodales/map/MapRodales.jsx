import React, { useEffect, useState } from 'react'

import { MapContainer, TileLayer, GeoJSON, useMapEvent } from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import "leaflet/dist/leaflet.css";

import emp from '../emp.json'


const MapRodales = ({ rodalGis, bound }) => {

  const [geoJsonLayer, setGeoJsonLayer] = useState();
 

  const setColor = ({ properties }) => {
    return { 
      fillColor: '#0000ff',
      weight: 0.5, 
      color: '#0000ff',
      fillOpacity: 0.6
    };
  };




  useEffect(() => {

    if(rodalGis != null && bound != null){
      let g_json = <GeoJSON data={rodalGis} style={setColor} />;
      setGeoJsonLayer(g_json);

    }

  }, [rodalGis, bound]);

  return (
    <>
      {rodalGis != null ? (bound != null ? <MapContainer 

        bounds={bound}
        zoomControl={true}
        scrollWheelZoom={false}
        touchZoom={true}

        style={{ width: '100%', height: '100%' }}>

        <TileLayer

          url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        />

        {geoJsonLayer}

      </MapContainer> : null) : null}

    </>


  )
}

export default MapRodales