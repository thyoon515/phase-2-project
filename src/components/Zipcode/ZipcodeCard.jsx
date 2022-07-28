import React from 'react'

const ZipcodeCard = ({ location }) => {

  const displayState = location.map(location => {
    
    return(
        <h1 key={location.state}>State: {location.state}</h1>
    )
  })

  const displayCity = location.map(location => {
    return (
        <h1 key={location["place name"]}>City: {location["place name"]}</h1>
    )
  })

  return (
    <div>
        {displayState}
        {displayCity}
    </div>
  )
}

export default ZipcodeCard