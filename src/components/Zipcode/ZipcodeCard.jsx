import React from 'react'

const ZipcodeCard = ({ location }) => {

  const displayState = location.map(location => {
    console.log(location)
    return(
        <h3 key={location.state}>State: {location.state}</h3>
    )
  })

  const displayCity = location.map(location => {
    return (
        <h3 key={location["place name"]}>City: {location["place name"]}</h3>
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