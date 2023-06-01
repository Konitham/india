import React from 'react'
import "./India.css"
import Search from './Search'
import { useState } from 'react'

const India = () => {
  const [querry , setQuerry] = useState("");
    console.log(querry)
  return (
    <div>

    <Search/>
    <div className='bg'>
      
    <h1 className ="header">Search here</h1>
    <input className ="header" type="text" placeholder="search..." onChange={(e)=>setQuerry(e.target.value)}></input>
    <div>
      {(() => {
        if (querry==="Hyderabad") {
          return (
            <div className='hyderabad'>* Hyderabad</div>
          )}
          else if (querry==="Bangalore") {
            return (
              <div className='Bangalore'>* Bangalore</div>
            )}
            else if (querry==="Mumbai") {
              return (
                <div className='Mumbai'>Mumbai *</div>
              )}
              else if (querry==="Chennai") {
                return (
                  <div className='Chennai'>* Chennai</div>
                )}
                else if (querry==="Delhi") {
                  return (
                    <div className='Delhi'>* Delhi</div>
                  ) }
      })()}
    </div>

    </div>
    </div>
  )
}

export default India