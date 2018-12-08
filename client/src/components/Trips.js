import React from 'react';
import Trip from './Trip';

const Trips = ({ trips, updateTrip, deleteTrip }) => (
  <div>
    { trips.map( trip => 
        <Trip
          key={trip.id}
          {...trip}
          updateTrip={updateTrip}
          deleteTrip={deleteTrip}
        />
      )
    }
  </div>
)

export default Trips;