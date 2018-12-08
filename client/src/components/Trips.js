import React from 'react';
import Trip from './Trip';
import { Item, } from "semantic-ui-react"

const Trips = ({ trips, updateTrip, deleteTrip }) => (
    <Item.Group divided="true">
    { trips.map( trip => 
        <Trip
        key={trip.id}
        {...trip}
        updateTrip={updateTrip}
        deleteTrip={deleteTrip}
        />
        )
      }
      </Item.Group>
)

export default Trips;