import React from 'react';
import Location from './Location';
import { Item, } from "semantic-ui-react"

const Locations = ({ locations, updateLocation, deleteLocation }) => (
    <Item.Group divided="true">
    { locations.map( location => 
        <Location
        key={location.id}
        {...location}
        updateLocation={updateLocation}
        deleteLocation={deleteLocation}
        />
        )
      }
      </Item.Group>
)

export default Locations;